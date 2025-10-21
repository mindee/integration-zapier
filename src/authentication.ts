import type { Authentication, Request } from "zapier-platform-core";

import { appVersion, MINDEE_V2_BASE_URL } from "./constants.js";

/**
 * Defines the authentication schema for the Mindee V2 API.
 */
export default {
  type: "custom",
  test: {
    url: `${MINDEE_V2_BASE_URL}/v2/search/models`,
    method: "GET",
    params: {},
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: "{{bundle.authData.apiKey}}",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "User-Agent": `mindee-api-zapier@v${appVersion}`,
    },
    body: {},
  } satisfies Request,
  fields: [
    {
      computed: false,
      key: "connectionName",
      label: "Connection Name",
      required: true,
      type: "string",
      helpText: "Choose a name for this [Mindee](https://app.mindee.com) connection.",
    },
    {
      computed: false,
      key: "apiKey",
      label: "API Key",
      required: true,
      type: "password",
      helpText:
        "Insert your Mindee V2 API key here. [More Information](https://docs.mindee.com/integrations/api-keys).",
    },
  ]
} satisfies Authentication;
