import zapier from "zapier-platform-core";
import { beforeAll } from "vitest";

declare global {
  // helper to attach auth to any bundle
   
  var withAuth: <T extends object>(b: T) => T & {
    authData: { apiKey: string; connection_name: string };
  };
}

beforeAll(() => {
  zapier.tools.env.inject();
});

globalThis.withAuth = (bundle) => {
  const apiKey = process.env.MINDEE_API_KEY;
  if (!apiKey) throw new Error("MINDEE_API_KEY missing in .env");
  return {
    ...bundle,
    authData: {
      apiKey: apiKey,
      connection_name: process.env.ZAPIER_CONNECTION_NAME || "local",
    },
  };
};
