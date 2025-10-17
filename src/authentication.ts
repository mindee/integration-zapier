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
      required: true,
      type: "string",
      helpText: "Name of the connection.",
    },
    {
      computed: false,
      key: "apiKey",
      required: true,
      type: "password",
      helpText:
        "Mindee V2 API Key. Refer to: https://docs.mindee.com/integrations/api-keys for more information.",
    },
  ]
} satisfies Authentication;
