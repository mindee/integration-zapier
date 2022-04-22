/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  operation: { 
    inputFields: [
      { key: 'document', required: true, type: 'file' }
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: {
          'Authorization':  'Token {{bundle.authData.api_key}}',
          'content-type': 'application/json'
        },
      });

      return promise.then((response) => JSON.parse(response.content));
    }
  },
  key: 'Mindee_passport',
  noun: 'Passport',
  display: {
    label: 'Mindee International Passport Parsing',
    description:
      'Instantly extract data from any passport using the Mindee Passport Extraction API',
    hidden: false,
    important: true,
  },
};
