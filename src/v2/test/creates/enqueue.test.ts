import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../../index.js";
import * as path from "node:path";
import * as fs from "node:fs";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe("creates.enqueue", () => {
  it("should run", async () => {
    const bundle = {
      authData: { apiKey: process.env["MINDEE_V2_API_KEY"] },
      inputData: {
        // TODO: find out how to mimic zapier file uploads for test
        file: fs.createReadStream(path.join(__dirname, "../fixtures/sample_invoice.jpg")),
        modelId: process.env["MINDEE_V2_FINDOC_MODEL_ID"],
      }
    };

    // @ts-expect-error TBD
    const results = await appTester(App.creates["enqueue"].operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
