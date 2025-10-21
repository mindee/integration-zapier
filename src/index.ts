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
    [v2.createEnqueueAndGetInference.key]: v2.createEnqueueAndGetInference,
  },
  triggers: {
    [v2.searchModels.key]: v2.searchModels,
  },
});
