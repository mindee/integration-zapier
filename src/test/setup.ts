import zapier from "zapier-platform-core";
import { beforeAll } from "vitest";

declare global {
  // helper to attach auth to any bundle

  var withAuth: <T extends object>(b: T) => T & {
    authData: { apiKey: string; connectionName: string };
  };
}

beforeAll(() => {
  zapier.tools.env.inject();
});

globalThis.withAuth = (bundle) => {
  const apiKey = process.env.MINDEE_V2_API_KEY;
  if (!apiKey) throw new Error("MINDEE_V2_API_KEY missing in .env");
  return {
    ...bundle,
    authData: {
      apiKey: apiKey,
      connectionName: process.env.ZAPIER_CONNECTION_NAME || "local",
    },
  };
};
