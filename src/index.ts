import { defineApp, version as platformVersion } from "zapier-platform-core";
import packageJson from "../package.json" with { type: "json" };

import authentication from "./authentication";
import someCreate from "./creates/some-create";
import someSearch from "./searches/some-search";
import someTrigger from "./triggers/some-trigger";

export default defineApp({
    // IMPORTANT: Note the use of `defineApp`
    version: packageJson.version,
    platformVersion,

    authentication,

    creates: {
        [someCreate.key]: someCreate,
    },
    searches: {
        [someSearch.key]: someSearch,
    },
    triggers: {
        [someTrigger.key]: someTrigger,
    },
});
