/** Copyright (C) 2021-2024, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

import zapier from 'zapier-platform-core';
import {describe, it} from "mocha";
import {should} from "chai"; //node seems to misidentify 'should' if this isn't provided

import App from '../index.js';

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
zapier.tools.env.inject();

describe('Create - Mindee_invoice', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_invoice'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_expense_receipt', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_expense_receipt'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_passport', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_passport'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_idcard_fr', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_idcard_fr'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_financial_document', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_financial_document'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_custom_api', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_custom_api'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_fr_bank_account_details', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_fr_bank_account_details'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_us_bank_check', () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_us_bank_check'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});

describe('Create - Mindee_us_driving_license', async () => {
  it('should create an object', async () => {
    await appTester(App.creates['Mindee_us_driving_license'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
      })
  });
});
