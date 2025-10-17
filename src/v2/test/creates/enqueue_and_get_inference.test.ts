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
    alias: "zapier-test-enqueue-get-inference",
  }
};

describe("creates.enqueue_and_get_inference", () => {
  it("should run", async () => {
    delete bundle.inputData["polygon"];
    delete bundle.inputData["confidence"];

    // @ts-expect-error TBD
    const results: any = await appTester(App.creates["v2_enqueue_and_get_inference"].operation.perform, bundle);
    expect(results).toBeInstanceOf(Object);
    expect(results.inference).toBeInstanceOf(Object);
    expect(results.inference.model.id).toEqual(modelId);

    expect(results.inference.active_options).toBeInstanceOf(Object);
    expect(results.inference.active_options.rag).toEqual(false);

    expect(results.inference.file).toBeInstanceOf(Object);
    expect(results.inference.file.mime_type).toEqual("application/pdf");

    expect(results.inference.result).toBeInstanceOf(Object);
    expect(results.inference.result.fields).toBeInstanceOf(Object);
  }, 20000);
});
