import { describe, expect, it } from "vitest";
import zapier, { Bundle } from "zapier-platform-core";

import App from "../../../index.js";
import { blankPdfPath } from "../index.js";
import fs from "node:fs";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();


function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}
const cropModelId = requireEnv("MINDEE_V2_CROP_MODEL_ID");
const splitModelId = requireEnv("MINDEE_V2_SPLIT_MODEL_ID");
const ocrModelId = requireEnv("MINDEE_V2_OCR_MODEL_ID");
const classificationModelId = requireEnv("MINDEE_V2_CLASSIFICATION_MODEL_ID");
const cropExtractionModelId = requireEnv("MINDEE_V2_CROP_EXTRACTION_MODEL_ID");

async function assertUtilityInferenceResponse(bundle: Bundle, productModelId: string) {
  // @ts-expect-error TBD
  const response: any = await appTester(App.creates["v2_utility_file_enqueue_and_poll"].operation.perform, bundle);

  expect(response).toBeInstanceOf(Object);
  expect(response.inference).toBeInstanceOf(Object);
  expect(response.inference.model.id).toEqual(productModelId);

  expect(response.inference.active_options).toBeInstanceOf(Object);
  expect(response.inference.active_options.rag).toEqual(false);

  expect(response.inference.file).toBeInstanceOf(Object);

  expect(response.inference.result).toBeInstanceOf(Object);
  const validKeys = ["crops", "splits", "pages", "classification"];
  const resultKeys = Object.keys(response.inference.result);

  const hasAtLeastOneValidKey = resultKeys.some(key => validKeys.includes(key));

  expect(
    hasAtLeastOneValidKey,
    `Expected result to contain one of: ${validKeys.join(", ")}. Actual keys found: ${resultKeys.join(", ")}`
  ).toBe(true);
}

describe("utility", () => {
  describe("common utilities", () => {
    const utilities = [
      { name: "crop", utilityType: "crop", modelId: cropModelId },
      { name: "split", utilityType: "split", modelId: splitModelId },
      { name: "ocr", utilityType: "ocr", modelId: ocrModelId },
      { name: "classification", utilityType: "classification", modelId: classificationModelId },
    ];

    it.each(utilities)(
      "should send a file stream to $name",
      async ({ utilityType, modelId }) => {
        const bundle: any = {
          authData: {
            apiKey: process.env["MINDEE_V2_API_KEY"],
          },
          inputData: {
            file: fs.createReadStream(blankPdfPath),
            modelId: modelId,
            utilityType: utilityType
          }
        };
        await assertUtilityInferenceResponse(bundle, modelId);
      },
      15000
    );

    it("should send a file stream to crop and extract the chained extraction", async () => {
      const bundle: any = {
        authData: {
          apiKey: process.env["MINDEE_V2_API_KEY"],
        },
        inputData: {
          file: fs.createReadStream(blankPdfPath),
          modelId: cropExtractionModelId,
          utilityType: "crop"
        }
      };

      // @ts-expect-error TBD
      const response: any = await appTester(App.creates["v2_utility_file_enqueue_and_poll"].operation.perform, bundle);

      expect(response).toBeInstanceOf(Object);
      expect(response.inference.result).toBeInstanceOf(Object);
      expect(response.inference.result.crops).toBeInstanceOf(Array);
      expect(response.inference.result.crops[0]).toBeInstanceOf(Object);
      expect(response.inference.result.crops[0].extraction_response).toBeInstanceOf(Object);
      expect(response.inference.result.crops[0].extraction_response.inference).toBeInstanceOf(Object);
      expect(response.inference.result.crops[0].extraction_response.inference.result).toBeInstanceOf(Object);
    }, 30000);
  });
});
