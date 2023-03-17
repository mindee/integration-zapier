/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const authentication = require('./authentication');
const mindeeInvoice = require('./creates/mindee_invoice.js');
const mindeePassport = require('./creates/mindee_passport.js');
const mindeeReceipt = require('./creates/mindee_receipt.js');
const mindeeFrenchId = require('./creates/mindee_idcard_fr.js');
const mindeeCustomAPI = require('./creates/mindee_custom.js');
const mindeeFinancialDocumentAPI = require('./creates/mindee_financial_document.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [mindeeInvoice.key]: mindeeInvoice,
    [mindeeReceipt.key]: mindeeReceipt,
    [mindeePassport.key]: mindeePassport,
    [mindeeFrenchId.key]: mindeeFrenchId,
    [mindeeCustomAPI.key]: mindeeCustomAPI,
    [mindeeFinancialDocumentAPI.key]: mindeeFinancialDocumentAPI,
  }
};
