/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  operation: { 
    inputFields: [
      {
        key: 'api_url',
        required: true,
        label: 'Your API URL',
        helpText: 'Go on the page of the concerned API, on platform.mindee.com and paste here the URL of the page',
        type:'string',
        placeholder: 'Example: https://platform.mindee.com/products/account_name/api_name'
      },
      {
        key: 'api_version',
        required: false,
        label: 'API Version (latest by default)',
        helpText: 'Leave empty unless you need to specify the version',
        type:'string',
        placeholder: 'Example: 1.6'
      },
      {
        key: 'document',
        required: true,
        label: 'Your document',
        helpText: 'Select here the file you want to analyze',
        type:'file',
        placeholder: 'Select your file...'
      },
    ],
    perform: (z, bundle) => {
      const apiVersion = bundle.inputData.api_version ? bundle.inputData.api_version : 1;
      const completeApiName = bundle.inputData.api_url.split("products/")[1].split("#")[0];
      const promise = z.request({
        url: `https://api.mindee.net/v1/products/${completeApiName}/v${apiVersion}/predict`,
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: {
          'Authorization':  'Token {{bundle.authData.api_key}}',
          'content-type': 'application/json',
          'User-Agent': 'mindee-api-zapier'
        },
      });

      return promise.then((response) => JSON.parse(response.content));
    },
    sample: {
      "surname": {
        "confidence": 0.99,
        "polygon": [
          [0.34, 0.581],
          [0.473, 0.581],
          [0.473, 0.604],
          [0.34, 0.604]
        ],
        "value": "PUDARSAN"
      }
    },
  },
  key: 'Mindee_custom_api',
  noun: 'API Builder parsing',
  display: {
    label: 'Mindee API Builder Parsing',
    description:
      'Extract data from a custom document using the Mindee API Builder made API',
    hidden: false,
    important: true,
  },
};
