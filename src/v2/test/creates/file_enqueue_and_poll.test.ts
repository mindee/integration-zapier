import { describe, expect, it } from "vitest";
import zapier, { Bundle } from "zapier-platform-core";

import App from "../../../index.js";
import { blankPdfPath } from "../index.js";
import fs from "node:fs";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

const modelId = process.env["MINDEE_V2_FINDOC_MODEL_ID"];

async function assertInferenceResponse(bundle: Bundle) {
  // @ts-expect-error TBD
  const response: any = await appTester(App.creates["v2_file_enqueue_and_poll"].operation.perform, bundle);
  expect(response).toBeInstanceOf(Object);
  expect(response.inference).toBeInstanceOf(Object);
  expect(response.inference.model.id).toEqual(modelId);

  expect(response.inference.active_options).toBeInstanceOf(Object);
  expect(response.inference.active_options.rag).toEqual(false);

  expect(response.inference.file).toBeInstanceOf(Object);

  expect(response.inference.result).toBeInstanceOf(Object);
  expect(response.inference.result.fields).toBeInstanceOf(Object);
}

describe("creates.enqueue", () => {
  it("should send a base64 file", async () => {
    const bundle: any = {
      authData: {
        apiKey: process.env["MINDEE_V2_API_KEY"],
      },
      inputData: {
        file: fs.readFileSync(blankPdfPath).toString("base64"),
        modelId: modelId,
      }
    };
    await assertInferenceResponse(bundle);
  }, 6000);

  it("should send a file stream", async () => {
    const bundle: any = {
      authData: {
        apiKey: process.env["MINDEE_V2_API_KEY"],
      },
      inputData: {
        file: fs.createReadStream(blankPdfPath),
        modelId: modelId,
      }
    };
    await assertInferenceResponse(bundle);
  }, 6000);

  it("should send a URL", async () => {
    const bundle: any = {
      authData: {
        apiKey: process.env["MINDEE_V2_API_KEY"],
      },
      inputData: {
        file: "https://raw.githubusercontent.com/mindee/client-lib-test-data/refs/heads/main/" +
          "file_types/pdf/blank_1.pdf",
        modelId: modelId,
      }
    };
    await assertInferenceResponse(bundle);
  }, 6000);
});
