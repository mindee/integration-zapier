import packageJson from "../package.json" with { type: "json" };

export const MINDEE_V2_BASE_URL = "https://api-v2.mindee.net";

export const appVersion = packageJson.version;
