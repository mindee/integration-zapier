import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../../index.js";
import { blankPdfPath } from "../index.js";
import fs from "node:fs";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe("creates.enqueue_and_get_inference", () => {
  it("should run", async () => {
    const bundle = {
      authData: { apiKey: process.env["MINDEE_V2_API_KEY"] },
      inputData: {
        file: fs.createReadStream(blankPdfPath),
        modelId: process.env["MINDEE_V2_FINDOC_MODEL_ID"],
      }
    };

    // @ts-expect-error TBD
    const results = await appTester(App.creates["enqueue_and_get_inference"].operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  }, 20000);
});
