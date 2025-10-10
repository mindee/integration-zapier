import { defineApp, version as platformVersion } from "zapier-platform-core";
import { version as appVersion } from "../package.json";
import authentication from "./authentication";

import createEnqueue from "./creates/enqueue.js";

import findInference from "./searches/inference.js";

import searchModels from "./triggers/search_models";
import { addAuthHeader } from "./middleware";

import createEnqueueAndGetInference from "./creates/enqueue_and_get_inference.js";

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
