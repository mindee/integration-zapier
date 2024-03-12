/** Copyright (C) 2021-2024, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults.js");
const {enqueueAndParse} = require("./async");

module.exports = {
  operation: {
    inputFields: [
      {
        key: 'api_url',
        required: true,
        label: 'Your API URL',
        helpText: 'Go on the page of the relevant API, on platform.mindee.com and paste here the URL of the page',
        type: 'string',
        placeholder: 'Example: https://platform.mindee.com/account_name/api_name'
      },
      {
        key: 'api_version',
        required: true,
        label: 'API Version',
        helpText: 'Available in the live interface.',
        type: 'string',
        placeholder: 'Example: 2 or 1.6'
      },
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const apiVersion = bundle.inputData.api_version ? bundle.inputData.api_version : 1;
      const splitUrl = bundle.inputData.api_url
        .replace("https://platform.mindee.com/", "")
        .replace("https://api.mindee.net/v1/products/", "")
        .split('/');
      const apiOwner = splitUrl[0];
      const apiName = splitUrl[1];
      const response = enqueueAndParse(z, bundle.inputData.document, apiOwner, apiName, apiVersion, defaults.postHeaders, 60);
      return response.then((res) => JSON.parse(res.content));
    },
    sample: {
      "api_request": {
        "error": {},
        "resources": [
          "document",
          "job"
        ],
        "status": "success",
        "status_code": 200,
        "url": "https://api.mindee.net/v1/products/mindee/invoice_splitter_async/v1/documents/d88406ed-47bd-4db0-b3f3-145c8667a343"
      },
      "document": {
        "id": "d88406ed-47bd-4db0-b3f3-145c8667a343",
        "inference": {
          "extras": {},
          "finished_at": "2023-03-21T13:53:00.974000",
          "is_rotation_applied": null,
          "pages": [
            {
              "extras": {},
              "id": 0,
              "orientation": {
                "value": null
              },
              "prediction": {}
            },
            {
              "extras": {},
              "id": 1,
              "orientation": {
                "value": null
              },
              "prediction": {}
            }
          ],
          "prediction": {
            "invoice_page_groups": [
              {
                "confidence": 1.0,
                "page_indexes": [
                  0
                ]
              },
              {
                "confidence": 1.0,
                "page_indexes": [
                  1
                ]
              }
            ]
          },
          "processing_time": 4.266,
          "product": {
            "features": [
              "invoice_page_groups"
            ],
            "name": "Mindee/invoice_splitter",
            "type": "standard",
            "version": "1.0"
          },
          "started_at": "2023-03-21T13:52:56.326107+00:00"
        },
        "n_pages": 2,
        "name": "2_invoices.pdf"
      },
      "job": {
        "available_at": "2023-03-21T13:53:00.990339",
        "id": "b6caf9e8-9bcc-4412-bcb7-f5b416678f0d",
        "issued_at": "2023-03-21T13:52:56.326107",
        "status": "completed",
        "error": {}
      }
    },
  },
  key: 'Mindee_generated_api',
  noun: 'Any Async API',
  display: {
    label: 'Any Async API',
    description:
      'Extract data from any document using any asynchronous API. E.g. Invoice Splitter, Resume, DocTI APIs.',
    hidden: false
  },
};
