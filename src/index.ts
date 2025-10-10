import { defineApp, version as platformVersion } from "zapier-platform-core";
import { appVersion } from "./constants.js";
import authentication from "./authentication.js";
import createEnqueue from "./creates/enqueue.js";
import findInference from "./searches/inference.js";
import searchModels from "./triggers/searchModels.js";
import { addAuthHeader } from "./middleware.js";

import createEnqueueAndGetInference from "./creates/enqueueAndGetInference.js";

/**
 * Defines the Zapier app.
 */
export default defineApp({
  version: appVersion,
  platformVersion,

  authentication,
  beforeRequest: [addAuthHeader],
  creates: {
    [createEnqueue.key]: createEnqueue,
    [createEnqueueAndGetInference.key]: createEnqueueAndGetInference
  },
  searches: {
    [findInference.key]: findInference
  },
  triggers: {
    [searchModels.key]: searchModels
  },
});
