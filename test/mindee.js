/** Copyright (C) 2021-2024, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const zapier = require('zapier-platform-core');
const App = require('../index.js');
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const appTester = zapier.createAppTester(App);

// Use dynamic import for chai
let expect;
before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});

const bundle = {
  authData: {
    api_key: process.env.MINDEE_API_KEY,
  },
  inputData: {
      document: readFileSync(join(__dirname, "blank_1.pdf"), { encoding: 'base64' }),
  },
};

describe('Create - Mindee_invoice', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_invoice"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_expense_receipt', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_expense_receipt"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_passport', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_passport"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_idcard_fr', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_idcard_fr"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_financial_document', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_financial_document"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_custom_api', () => {
  it('should create an object', async () => {
    try {
      bundle["inputData"]["api_url"] = "";
      await appTester(App.creates["Mindee_custom_api"].operation.perform, bundle);
      // If we reach this point, the test should fail because we expected a 404
      throw new Error('Expected 404 error but request succeeded');
    } catch (error) {
      expect(error.message).to.include('404');
    }
  });
});

describe('Create - Mindee_fr_bank_account_details', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_fr_bank_account_details"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_us_bank_check', () => {
  it('should create an object', async () => {
    const result = await appTester(App.creates["Mindee_us_bank_check"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_driver_license', async () => {
  it('should create an object', async function() {
    this.timeout(20000);

    const result = await appTester(App.creates["Mindee_driver_license"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});

describe('Create - Mindee_generated_api', () => {
  it('should create an object', async function() {
    this.timeout(20000);

    bundle["inputData"]["api_url"] = "https://platform.mindee.com/mindee/driver_license";
    bundle["inputData"]["api_version"] = "1";

    const result = await appTester(App.creates["Mindee_generated_api"].operation.perform, bundle);
    expect(result).to.be.an('object');
    expect(result.document).to.be.an('object');
  });
});
