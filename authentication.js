/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  type: 'custom',
  test: {
    url: '{{bundle.authData.api_endpoint}}',
    method: 'POST',
    params: {},
    headers: { Authorization: 'Token {{bundle.authData.api_key}}' },
    body: {
      document:
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=',
    },
    removeMissingValuesFrom: {},
  },
  fields: [

    {
      computed: false,
      key: 'api_endpoint',
      required: true,
      choices: [
        {
          sample:
            'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
          value:
            'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
          label: 'Receipt API',
        },
        {
          sample:
            'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
          value:
            'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
          label: 'Invoice API',
        },
        {
          sample:
            'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
          value:
            'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
          label: 'Passport API',
        },
      ],
      label: 'The API endpoint you wish to authenticate against',
    },
    {
      computed: false,
      key: 'api_key',
      required: true,
      type: 'string',
      helpText:
        'Insert your api key in order to make calls to the Mindee platform. You can find or create your api key: https://platform.mindee.com/',
    },
  ],
  connectionLabel: '{{bundle.authData.api_endpoint}}',
  customConfig: {},
};
