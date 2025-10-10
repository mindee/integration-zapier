import { appVersion } from "./constants.js";
import type { BeforeRequestMiddleware } from "zapier-platform-core";

export const addAuthHeader: BeforeRequestMiddleware = (request, z, bundle) => {
  request.headers = request.headers || {};

  if (bundle.authData?.apiKey && !request.headers.Authorization) {
    request.headers.Authorization = bundle.authData.apiKey;
  }
  request.headers["User-Agent"] = `mindee-api-zapier@v${appVersion}`;

  return request;
};
