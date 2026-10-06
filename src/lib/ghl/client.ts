import { getGhlConfig } from "./config";

export interface GhlCustomFieldValue {
  id: string;
  key?: string;
  field_value: unknown;
}

export interface GhlContactData {
  id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  tags?: string[];
  customFields?: Array<{ id: string; value?: unknown; fieldValue?: unknown }>;
}

export interface GhlOpportunityData {
  id: string;
  name: string;
  pipelineId: string;
  pipelineStageId: string;
  status: string;
  contactId: string;
  source?: string;
}

async function ghlFetch<T>(
  path: string,
  options: {
    method?: string;
    body?: unknown;
    headers?: Record<string, string>;
  } = {}
): Promise<{ ok: boolean; status: number; data?: T; errorText?: string }> {
  const config = getGhlConfig();
  const url = `${config.baseUrl}${path}`;
  const method = options.method || "GET";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${config.token}`,
    Version: config.apiVersion,
    Accept: "application/json",
    ...options.headers,
  };

  let bodyString: string | undefined;
  if (options.body !== undefined) {
    headers["Content-Type"] = "application/json";
    bodyString = JSON.stringify(options.body);
  }

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: bodyString,
      cache: "no-store",
    });

    if (res.status === 204) {
      return { ok: true, status: 204 };
    }

    const text = await res.text();
    let parsed: T | undefined;
    try {
      parsed = text ? JSON.parse(text) : undefined;
    } catch {
      // not JSON
    }

    if (!res.ok) {
      // Log sanitized server-side error
      console.error(
        `[GHL Error] ${method} ${path.split("?")[0]} failed with status ${res.status}:`,
        parsed || text.slice(0, 300)
      );
      return { ok: false, status: res.status, errorText: text };
    }

    return { ok: true, status: res.status, data: parsed };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[GHL Network Error] ${method} ${path.split("?")[0]}:`, msg);
    return { ok: false, status: 500, errorText: msg };
  }
}

/**
 * Searches for an existing contact by email first and phone second.
 */
export async function findExistingContact(
  normalizedEmail: string,
  normalizedPhone?: string
): Promise<GhlContactData | null> {
  const config = getGhlConfig();

  // 1. Search by email
  if (normalizedEmail) {
    const res = await ghlFetch<{ contact?: GhlContactData }>(
      `/contacts/search/duplicate?locationId=${config.locationId}&email=${encodeURIComponent(
        normalizedEmail
      )}`
    );
    if (res.ok && res.data?.contact?.id) {
      return res.data.contact;
    }

    // Fallback: search query by email
    const queryRes = await ghlFetch<{ contacts?: GhlContactData[] }>(
      `/contacts/?locationId=${config.locationId}&query=${encodeURIComponent(
        normalizedEmail
      )}`
    );
    if (queryRes.ok && queryRes.data?.contacts && queryRes.data.contacts.length > 0) {
      const match = queryRes.data.contacts.find(
        (c) => c.email?.toLowerCase().trim() === normalizedEmail
      );
      if (match) return match;
    }
  }

  // 2. Search by phone
  if (normalizedPhone) {
    const res = await ghlFetch<{ contact?: GhlContactData }>(
      `/contacts/search/duplicate?locationId=${config.locationId}&number=${encodeURIComponent(
        normalizedPhone
      )}`
    );
    if (res.ok && res.data?.contact?.id) {
      return res.data.contact;
    }

    // Fallback query
    const queryRes = await ghlFetch<{ contacts?: GhlContactData[] }>(
      `/contacts/?locationId=${config.locationId}&query=${encodeURIComponent(
        normalizedPhone
      )}`
    );
    if (queryRes.ok && queryRes.data?.contacts && queryRes.data.contacts.length > 0) {
      const match = queryRes.data.contacts.find(
        (c) => c.phone?.replace(/[^0-9]/g, "") === normalizedPhone.replace(/[^0-9]/g, "")
      );
      if (match) return match;
    }
  }

  return null;
}

/**
 * Gets a contact with full custom fields.
 */
export async function getContact(contactId: string): Promise<GhlContactData | null> {
  const res = await ghlFetch<{ contact?: GhlContactData }>(`/contacts/${contactId}`);
  if (res.ok && res.data?.contact) {
    return res.data.contact;
  }
  return null;
}

/**
 * Creates a new contact in GHL.
 */
export async function createContact(payload: {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  companyName?: string;
  tags?: string[];
  customFields?: GhlCustomFieldValue[];
}): Promise<GhlContactData> {
  const config = getGhlConfig();
  const body = {
    ...payload,
    locationId: config.locationId,
  };

  const res = await ghlFetch<{ contact: GhlContactData }>("/contacts/", {
    method: "POST",
    body,
  });

  if (!res.ok || !res.data?.contact) {
    throw new Error(`Failed to create contact in GoHighLevel (status ${res.status})`);
  }

  return res.data.contact;
}

/**
 * Updates an existing contact in GHL.
 */
export async function updateContact(
  contactId: string,
  payload: {
    firstName?: string;
    lastName?: string;
    name?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    tags?: string[];
    customFields?: GhlCustomFieldValue[];
  }
): Promise<GhlContactData> {
  const res = await ghlFetch<{ contact: GhlContactData }>(`/contacts/${contactId}`, {
    method: "PUT",
    body: payload,
  });

  if (!res.ok || !res.data?.contact) {
    throw new Error(`Failed to update contact ${contactId} in GoHighLevel (status ${res.status})`);
  }

  return res.data.contact;
}

/**
 * Searches for active opportunities for a contact in a specific pipeline.
 */
export async function findActiveOpportunity(
  contactId: string,
  pipelineId: string
): Promise<GhlOpportunityData | null> {
  const config = getGhlConfig();
  const res = await ghlFetch<{ opportunities?: GhlOpportunityData[] }>(
    `/opportunities/search?location_id=${config.locationId}&contact_id=${contactId}&pipeline_id=${pipelineId}`
  );

  if (res.ok && res.data?.opportunities) {
    const active = res.data.opportunities.find((opp) => {
      if (opp.pipelineId !== pipelineId) return false;
      const status = (opp.status || "").toLowerCase();
      // Active if status is 'open' or not terminal
      return status === "open" || (!["won", "lost", "abandoned"].includes(status) && status !== "");
    });
    if (active) return active;
  }

  return null;
}

/**
 * Creates an opportunity in GHL.
 */
export async function createOpportunity(payload: {
  pipelineId: string;
  pipelineStageId: string;
  name: string;
  status: "open";
  contactId: string;
  source: string;
}): Promise<GhlOpportunityData> {
  const config = getGhlConfig();
  const body = {
    ...payload,
    locationId: config.locationId,
  };

  const res = await ghlFetch<{ opportunity: GhlOpportunityData }>("/opportunities/", {
    method: "POST",
    body,
  });

  if (!res.ok || !res.data?.opportunity) {
    throw new Error(`Failed to create opportunity in GoHighLevel (status ${res.status})`);
  }

  return res.data.opportunity;
}

/**
 * Updates an existing opportunity in GHL.
 */
export async function updateOpportunity(
  opportunityId: string,
  payload: {
    name?: string;
    pipelineStageId?: string;
    source?: string;
    status?: string;
  }
): Promise<GhlOpportunityData> {
  const res = await ghlFetch<{ opportunity: GhlOpportunityData }>(
    `/opportunities/${opportunityId}`,
    {
      method: "PUT",
      body: payload,
    }
  );

  if (!res.ok || !res.data?.opportunity) {
    throw new Error(
      `Failed to update opportunity ${opportunityId} in GoHighLevel (status ${res.status})`
    );
  }

  return res.data.opportunity;
}
