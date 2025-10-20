/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.mindee.net/v1/customers/self/products',
    method: 'GET',
    params: {},
    headers: { Authorization: 'Token {{bundle.authData.api_key}}' },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'connection_name',
      label: 'Connection Name',
      required: true,
      type: 'string',
      helpText:
        'Name that will be displayed as the name of this connection, in case you want to use several Mindee users/organizations',
    },
    {
      computed: false,
      key: 'api_key',
      label: 'API Key',
      required: true,
      type: 'password',
      helpText:
        'Insert your API key in order to make calls to the Mindee platform. [More Information](https://docs.mindee.com/v1/get-started/create-api-key)',
    },
  ],
  connectionLabel: '{{bundle.authData.connection_name}}',
  customConfig: {},
};
