/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
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
      key: 'api_key',
      required: false,
      type: 'string',
      helpText:
        'insert your api key in order to make calls to the Mindee platform. You can find & create your api key: https://platform.mindee.com/apishub/products/mindee/invoices',
    },
  ],
  customConfig: {},
};
