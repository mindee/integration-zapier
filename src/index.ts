import { defineApp, version as platformVersion } from "zapier-platform-core";
import { appVersion } from "./constants.js";
import authentication from "./authentication.js";
import * as v2 from "./v2/index.js";
import { addAuthHeader } from "./middleware.js";

/**
 * Defines the Zapier app.
 */
export default defineApp({
  version: appVersion,
  platformVersion,
  authentication,
  beforeRequest: [addAuthHeader],
  creates: {
    [v2.createEnqueue.key]: v2.createEnqueue,
    [v2.createEnqueueAndGetInference.key]: v2.createEnqueueAndGetInference,
  },
  searches: {
    [v2.inferenceByPolling.key]: v2.inferenceByPolling,
    [v2.inference.key]: v2.inference,
  },
  triggers: {
    [v2.searchModels.key]: v2.searchModels,
  },
});
