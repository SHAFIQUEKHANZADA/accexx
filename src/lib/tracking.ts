/**
 * Client-side helper to collect page URL and UTM parameters.
 * Never stores or touches private API credentials.
 */

export interface TrackingData {
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return {
    pageUrl: window.location.href,
    utmSource: params.get("utm_source") || params.get("utmSource") || undefined,
    utmMedium: params.get("utm_medium") || params.get("utmMedium") || undefined,
    utmCampaign: params.get("utm_campaign") || params.get("utmCampaign") || undefined,
  };
}
