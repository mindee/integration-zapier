/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

const bundle = {
  authData: {
    api_key: process.env.API_KEY,
    oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
    oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
    oauth_token: process.env.OAUTH_TOKEN,
    oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
  },

  inputData: {},
};

describe('Create - Mindee_invoice', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {

    appTester(App.creates['Mindee_invoice'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_expense_receipt', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {

    appTester(App.creates['Mindee_expense_receipt'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_passport', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {

    appTester(App.creates['Mindee_passport'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});
