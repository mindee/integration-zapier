import { version as appVersion } from "../package.json";
import type { BeforeRequestMiddleware } from "zapier-platform-core";

export const addAuthHeader: BeforeRequestMiddleware = (request, z, bundle) => {
  request.headers = request.headers || {};

  if (bundle.authData?.api_key && !request.headers.Authorization) {
    request.headers.Authorization = bundle.authData.api_key;
  }
  request.headers["User-Agent"] = `mindee-api-zapier@v${appVersion}`;

  return request;
};
