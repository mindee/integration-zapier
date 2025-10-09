import type { Authentication, Request } from "zapier-platform-core";

import { MINDEE_API_V2_URL } from "./constants";

/**
 * Defines the authentication schema for the Mindee V2 API.
 */
export default {
  type: "custom",
  test: {
    url: `${MINDEE_API_V2_URL}/v2/search/models`,
    method: "GET",
    params: {},
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: "{{bundle.authData.api_key}}"
    },
    body: {},
  } satisfies Request,
  fields: [
    {
      computed: false,
      key: "connection_name",
      required: true,
      type: "string",
      helpText:
                "Name of the connection.",
    },
    {
      computed: false,
      key: "api_key",
      required: true,
      type: "password",
      helpText:
                "Mindee V2 API Key. Refer to: https://docs.mindee.com/integrations/api-keys for more information.",
    },
  ]
} satisfies Authentication;
