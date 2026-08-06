import { defineApp, version as platformVersion } from "zapier-platform-core";
import { appVersion } from "./constants.js";
import authentication from "./authentication.js";
import { befores, afters } from "./middleware.js";
import * as v2 from "./v2/index.js";

/**
 * Defines the Zapier app.
 */
export default defineApp({
  version: appVersion,
  platformVersion: platformVersion,
  authentication: authentication,
  beforeRequest: [...befores],
  afterResponse: [...afters],
  creates: {
    [v2.createExtractionEnqueueAndGetInference.key]: v2.createExtractionEnqueueAndGetInference,
    [v2.createCropEnqueueAndGetInference.key]: v2.createCropEnqueueAndGetInference,
    [v2.createSplitEnqueueAndGetInference.key]: v2.createSplitEnqueueAndGetInference,
    [v2.createClassificationEnqueueAndGetInference.key]: v2.createClassificationEnqueueAndGetInference,
    [v2.createOcrEnqueueAndGetInference.key]: v2.createOcrEnqueueAndGetInference,
  },
  triggers: {
    [v2.searchModels.key]: v2.searchModels,
    [v2.searchExtractionModels.key]: v2.searchExtractionModels,
    [v2.searchCropModels.key]: v2.searchCropModels,
    [v2.searchSplitModels.key]: v2.searchSplitModels,
    [v2.searchClassificationModels.key]: v2.searchClassificationModels,
    [v2.searchOcrModels.key]: v2.searchOcrModels,
  },
});
