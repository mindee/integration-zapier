import type { Authentication, Request } from "zapier-platform-core";

import { API_V2_URL } from "./constants";

export default {
    type: "custom",
    test: {
        url: `${API_V2_URL}/search/models`,
        method: "GET",
        params: {},
        headers: {
            Authorization: "{{bundle.authData.api_key}}"
        },
        body: {},
    } satisfies Request,
    fields: [
        {
            computed: false,
            key: 'connection_name',
            required: true,
            type: 'string',
            helpText:
                'Name of the connection.',
        },
        {
            computed: false,
            key: 'api_key',
            required: true,
            type: 'password',
            helpText:
                'Mindee V2 API Key. Refer to: https://docs.mindee.com/integrations/api-keys for more information.',
        },
    ]
} satisfies Authentication;
