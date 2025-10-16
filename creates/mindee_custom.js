/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults.js");
const { MINDEE_V1_BASE_URL } = require("../constants.js");

module.exports = {
  operation: {
    inputFields: [
      {
        key: 'api_url',
        required: true,
        label: 'Your API URL',
        helpText: 'Go on the page of the relevant API, on platform.mindee.com and paste here the URL of the page',
        type:'string',
        placeholder: 'Example: https://platform.mindee.com/account_name/api_name'
      },
      {
        key: 'api_version',
        required: false,
        label: 'API Version (latest by default)',
        helpText: 'Leave empty unless you need to specify the version',
        type:'string',
        placeholder: 'Example: 1.6'
      },
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const apiVersion = bundle.inputData.api_version ? bundle.inputData.api_version : 1;
      const splitUrl = bundle.inputData.api_url
            .replace("https://platform.mindee.com/","")
            .replace("https://api.mindee.net/v1/products/","")
            .split('/');
      const apiOwner = splitUrl[0];
      const apiName = splitUrl[1];
      const promise = z.request({
        url: `${MINDEE_V1_BASE_URL}/v1/products/${apiOwner}/${apiName}/v${apiVersion}/predict`,
        method: "POST",
        body: {
          "document": bundle.inputData.document
        }
      });
      return promise.then((response) => JSON.parse(response.content));
    },
    sample: {
      "api_request": {
        "error": {},
        "resources": [
          "document"
        ],
        "status": "success",
        "status_code": 201,
        "url": "https://api.mindee.net/v1/products/test/field_test/v1/predict"
      },
      "document": {
        "id": "37067c22-4cea-40d3-9809-b9ca1bfedd33",
        "inference": {
          "extras": {},
          "finished_at": "2022-05-19T08:57:40+00:00",
          "is_rotation_applied": true,
          "pages": [
            {
              "extras": {},
              "id": 0,
              "orientation": {
                "value": null
              },
              "prediction": {}
            }
          ],
          "prediction": {},
          "processing_time": 0.593,
          "product": {
            "features": [],
            "name": "test/field_test",
            "type": "constructed",
            "version": "1.1"
          },
          "started_at": "2022-05-19T08:57:40+00:00"
        },
        "n_pages": 1,
        "name": "hello.pdf"
      }
    },
  },
  key: 'Mindee_custom_api',
  noun: 'API Builder parsing',
  display: {
    label: "Mindee API Builder Parsing (Deprecated)",
    description:
      "Deprecated. Use doctTI (generated) instead.",
    hidden: true
  },
};
