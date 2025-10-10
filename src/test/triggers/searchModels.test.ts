// NOTE: connection to the server works.
import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../index.js";

const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("triggers.search_models", () => {
  it("should run", async () => {
    const bundle = {
      authData: { apiKey: process.env["MINDEE_V2_API_KEY"] },
      inputData: {
        modelId: process.env["MINDEE_V2_MODEL_ID"]
      }
    };

    // @ts-expect-error TBD
    const results = await appTester(App.triggers["search_models"].operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
