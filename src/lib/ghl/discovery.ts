import { getGhlConfig } from "./config";

export interface ResolvedPipeline {
  id: string;
  name: string;
  firstStageId: string;
  firstStageName: string;
}

export interface DiscoveredCustomField {
  id: string;
  name: string;
  fieldKey: string;
  dataType: string;
}

export interface DiscoveredGhlObjects {
  pipelines: {
    generalInquiry: ResolvedPipeline;
    cohortSales: ResolvedPipeline;
    consultingSales: ResolvedPipeline;
    coachingSales: ResolvedPipeline;
    speakingEngagements: ResolvedPipeline;
  };
  customFields: Map<string, DiscoveredCustomField>;
}

// In-memory cache for discovered live GHL objects
let cachedDiscovery: { data: DiscoveredGhlObjects; timestamp: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

const REQUIRED_PIPELINES = [
  { key: "generalInquiry", name: "General Inquiry", stage: "New Inquiry" },
  { key: "cohortSales", name: "Education & Cohort Sales", stage: "New Cohort Request" },
  { key: "consultingSales", name: "Consulting Sales", stage: "New Proposal Request" },
  { key: "coachingSales", name: "Coaching Sales", stage: "New Coaching Inquiry" },
  { key: "speakingEngagements", name: "Speaking Engagements", stage: "New Speaking Inquiry" },
] as const;

export const REQUIRED_CUSTOM_FIELDS = [
  "Inquiry Type",
  "Primary Interest",
  "Inquiry Message",
  "Original Lead Source",
  "Original Source Page",
  "Original Inquiry Date",
  "Marketing Consent",
  "SMS Consent",
  "Consent Date and Time",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "Program Family",
  "Requested Program",
  "Program Code",
  "Estimated Cohort Size",
  "Preferred Delivery Format",
  "Preferred Start Date",
  "Delivery City",
  "Delivery State or Region",
  "Delivery Country",
  "Cohort Request Notes",
  "Consulting Category",
  "Consulting Engagement",
  "Consulting Engagement Code",
  "Organizational Challenge",
  "Preferred Consulting Start",
  "Consulting Delivery Preference",
  "Coaching Stream",
  "Coaching Participant Type",
  "Preferred Coaching Package",
  "Coaching Goals",
  "Preferred Coaching Start",
  "Coaching Sponsor",
  "Event Name",
  "Event Type",
  "Event Date",
  "Event Start Time",
  "Event Time Zone",
  "Event Format",
  "Event Venue",
  "Event City",
  "Event State or Region",
  "Event Country",
  "Estimated Audience Size",
  "Requested Speaking Topic",
  "Speaking Request Details",
  "Travel Required",
  "Accexx Circle Status",
  "Accexx Circle Join Date",
  "Circle Interest",
  "Registered Event Name",
  "Registered Event Date",
  "Event Registration Status",
  "Event Attendee Type",
  "Inside the Pages Interest",
  "Open Floor Author Interest",
  "Author Book Title",
  "Resource Partner Type",
  "Event Registration Notes",
] as const;

/**
 * Discovers live GHL objects (pipelines, stages, and contact custom fields)
 * and resolves IDs by exact name. Throws an error if any required object is missing.
 */
export async function discoverGhlObjects(forceRefresh = false): Promise<DiscoveredGhlObjects> {
  const now = Date.now();
  if (!forceRefresh && cachedDiscovery && now - cachedDiscovery.timestamp < CACHE_TTL_MS) {
    return cachedDiscovery.data;
  }

  const config = getGhlConfig();
  const headers = {
    Authorization: `Bearer ${config.token}`,
    Version: config.apiVersion,
    Accept: "application/json",
  };

  // 1. Fetch pipelines
  const pipelinesUrl = `${config.baseUrl}/opportunities/pipelines?locationId=${config.locationId}`;
  const pipeRes = await fetch(pipelinesUrl, { headers, cache: "no-store" });
  if (!pipeRes.ok) {
    const errorText = await pipeRes.text().catch(() => "");
    throw new Error(
      `Failed to fetch GHL pipelines (HTTP ${pipeRes.status}): ${errorText.slice(0, 300)}`
    );
  }
  const pipeData = (await pipeRes.json()) as {
    pipelines?: Array<{ id: string; name: string; stages?: Array<{ id: string; name: string }> }>;
  };
  const livePipelines = pipeData.pipelines ?? [];

  // Resolve each required pipeline and first stage
  const resolvedPipelines: Record<string, ResolvedPipeline> = {};
  for (const item of REQUIRED_PIPELINES) {
    const pipeMatch = livePipelines.find(
      (p) => p.name.trim().toLowerCase() === item.name.toLowerCase()
    );
    if (!pipeMatch) {
      throw new Error(
        `Required GoHighLevel pipeline missing: "${item.name}". Stopping without creating duplicates.`
      );
    }

    const stages = pipeMatch.stages ?? [];
    const stageMatch = stages.find(
      (s) => s.name.trim().toLowerCase() === item.stage.toLowerCase()
    );
    if (!stageMatch) {
      throw new Error(
        `Required GoHighLevel first stage "${item.stage}" missing in pipeline "${item.name}". Stopping without creating duplicates.`
      );
    }

    resolvedPipelines[item.key] = {
      id: pipeMatch.id,
      name: pipeMatch.name,
      firstStageId: stageMatch.id,
      firstStageName: stageMatch.name,
    };
  }

  // 2. Fetch contact custom fields
  const customFieldsUrl = `${config.baseUrl}/locations/${config.locationId}/customFields`;
  const cfRes = await fetch(customFieldsUrl, { headers, cache: "no-store" });
  if (!cfRes.ok) {
    const errorText = await cfRes.text().catch(() => "");
    throw new Error(
      `Failed to fetch GHL custom fields (HTTP ${cfRes.status}): ${errorText.slice(0, 300)}`
    );
  }
  const cfData = (await cfRes.json()) as {
    customFields?: Array<{
      id: string;
      name: string;
      fieldKey: string;
      dataType: string;
    }>;
  };
  const liveFields = cfData.customFields ?? [];

  const fieldMap = new Map<string, DiscoveredCustomField>();
  for (const f of liveFields) {
    fieldMap.set(f.name.toLowerCase().trim(), f);
    if (f.fieldKey) {
      fieldMap.set(f.fieldKey.toLowerCase().trim(), f);
    }
  }

  // Verify every required custom field exists
  const missingFields: string[] = [];
  for (const reqField of REQUIRED_CUSTOM_FIELDS) {
    const keyCandidate = "contact." + reqField.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const found =
      fieldMap.get(reqField.toLowerCase().trim()) || fieldMap.get(keyCandidate);
    if (!found) {
      missingFields.push(reqField);
    }
  }

  if (missingFields.length > 0) {
    throw new Error(
      `Required GoHighLevel custom field(s) missing: [${missingFields.join(
        ", "
      )}]. Stopping without creating duplicate fields.`
    );
  }

  const result: DiscoveredGhlObjects = {
    pipelines: resolvedPipelines as DiscoveredGhlObjects["pipelines"],
    customFields: fieldMap,
  };

  cachedDiscovery = { data: result, timestamp: now };
  return result;
}

/**
 * Gets a custom field ID by exact field name or key from the discovered fields.
 */
export async function getCustomFieldDef(
  nameOrKey: string
): Promise<DiscoveredCustomField | undefined> {
  const discovery = await discoverGhlObjects();
  const lower = nameOrKey.toLowerCase().trim();
  const keyCandidate = "contact." + lower.replace(/[^a-z0-9]/g, "_");
  return discovery.customFields.get(lower) || discovery.customFields.get(keyCandidate);
}
