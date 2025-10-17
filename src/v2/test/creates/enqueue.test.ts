import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../../index.js";
import { blankPdfPath } from "../index.js";
import fs from "node:fs";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

const modelId = process.env["MINDEE_V2_FINDOC_MODEL_ID"];
const bundle: any = {
  authData: {
    apiKey: process.env["MINDEE_V2_API_KEY"],
  },
  inputData: {
    file: fs.readFileSync(blankPdfPath).toString("base64"),
    modelId: modelId,
    alias: "zapier-test-enqueue",
  }
};

describe("creates.enqueue", () => {
  it("should run with default options", async () => {
    delete bundle.inputData["polygon"];
    delete bundle.inputData["confidence"];

    // @ts-expect-error TBD
    const response: any = await appTester(App.creates["v2_enqueue"].operation.perform, bundle);
    expect(response).toBeInstanceOf(Object);
    expect(response.job).toBeInstanceOf(Object);
    expect(response.job.status).toEqual("Processing");
    expect(response.job.model_id).toEqual(modelId);
    expect(response.job.alias).toEqual("zapier-test-enqueue");
    expect(response.job.error).toBeNull;
  }, 6000);
});
