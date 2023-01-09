/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.mindee.net/v1/products/mindee/invoices/v4/predict',
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
      key: 'connection_name',
      required: true,
      type: 'string',
      helpText:
        'Name that will be displayed as the name of this connection, in case you want to use several Mindee users/organizations',
    },
    {
      computed: false,
      key: 'api_key',
      required: true,
      type: 'string',
      helpText:
        'Insert your API key in order to make calls to the Mindee platform. You can create your API key as mentioned here: https://developers.mindee.com/docs/create-api-key#creating-your-api-key',
    },
    
  ],
  connectionLabel: '{{bundle.authData.connection_name}}',
  customConfig: {},
};
