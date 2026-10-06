/**
 * Server-only configuration for GoHighLevel API integration.
 * Credentials must NEVER be exposed to client-side bundles.
 */

export function getGhlConfig() {
  const token =
    process.env.GHL_PRIVATE_INTEGRATION_TOKEN ||
    process.env.GHL_API_KEY ||
    process.env.GHL_ACCESS_TOKEN ||
    process.env.api;

  const locationId =
    process.env.GHL_LOCATION_ID ||
    process.env.loc;

  if (!token || !locationId) {
    throw new Error(
      "Missing GoHighLevel credentials. Please ensure GHL_PRIVATE_INTEGRATION_TOKEN (or api) and GHL_LOCATION_ID (or loc) are configured in .env."
    );
  }

  return {
    token: token.trim(),
    locationId: locationId.trim(),
    baseUrl: "https://services.leadconnectorhq.com",
    apiVersion: "2021-07-28",
  };
}
