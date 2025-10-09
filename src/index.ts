import { defineApp, version as platformVersion } from "zapier-platform-core";
import { version as appVersion } from "../package.json";
import searchModels from "./searches/searchModels";
import authentication from "./authentication";

import createEnqueue from "./creates/enqueue.js";

/**
 * Defines the Zapier app.
 */
export default defineApp({
  version: appVersion,
  platformVersion,

  authentication,

  creates: {
    [createEnqueue.key]: createEnqueue
  },
  searches: {
    [searchModels.key]: searchModels,
  },
  triggers: {},
});
