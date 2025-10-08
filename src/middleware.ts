import { appVersion } from "./constants.js";
import type { BeforeRequestMiddleware, Bundle, ZObject } from "zapier-platform-core";

export const addAuthHeader: BeforeRequestMiddleware = (request, z: ZObject, bundle: Bundle) => {
  request.headers = request.headers || {};

  if (bundle.authData?.apiKey && !request.headers.Authorization) {
    request.headers.authorization = bundle.authData.apiKey;
  }

  // must be lowercase to override the default user-agent
  request.headers["user-agent"] = `mindee-api-zapier@v${appVersion}`;

  return request;
};

export const befores = [addAuthHeader];

export const afters = [];
