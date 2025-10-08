import type { BeforeRequestMiddleware } from "zapier-platform-core";

export const addTokenHeader: BeforeRequestMiddleware = (
    request,
    z,
    bundle,
) => {
    if (bundle.authData.access_token && !request.headers?.Authorization) {
        request.headers = {
            ...request.headers,
            Authorization: `${bundle.authData.api_key}`,
        };
    }
    return request;
};