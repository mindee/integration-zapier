const { appVersion } = require("./constants.js");

const addAuthHeader = (request, z, bundle) => {
  request.headers = request.headers || {};

  if (bundle.authData?.api_key && !request.headers.Authorization) {
    request.headers.authorization = `Token ${bundle.authData.api_key}`;
  }

  // must be lowercase to override the default user-agent
  request.headers["user-agent"] = `mindee-api-zapier@v${appVersion}`;

  return request;
};

module.exports = {
  addAuthHeader,
};
