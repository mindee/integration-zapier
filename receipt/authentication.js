module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
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
        'Insert your api key in order to make calls to the Mindee platform. You can find & create your api key: https://platform.mindee.com/apishub/products/mindee/expense_receipts',
    },
  ],
  customConfig: {},
};
