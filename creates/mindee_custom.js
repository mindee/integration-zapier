/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

/*const url_base = 'https://platform.mindee.com/products/xavier/accomodation_receipts_extra_fields'
let username = url_base.split("/")[4]
let api_name = url_base.split("/")[5]
api_name = api_name.split("#")[0]
const api_version = '1'*/

module.exports = {
  operation: { 
    inputFields: [
      {
        key: 'api_url',
        required: true,
        label: 'Your API URL',
        helpText: 'Go on the page of the concerned API, on platform.mindee.com and paste here the URL of the page.',
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
      let apiVersion = bundle.inputData.api_version ? bundle.inputData.api_version : 1;
      let apiName = bundle.inputData.api_url.split("products/")[1].split("#")[0];
      const promise = z.request({
        url: `https://api.mindee.net/v1/products/${apiName}/v${apiVersion}/predict`,
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
