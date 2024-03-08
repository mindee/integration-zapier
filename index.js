/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

import authentication from "./authentication.js";

import mindeeInvoice from './creates/mindee_invoice.js';
import mindeePassport from './creates/mindee_passport.js';
import mindeeReceipt from './creates/mindee_receipt.js';
import mindeeFrenchId from './creates/mindee_idcard_fr.js';
import mindeeCustomAPI from './creates/mindee_custom.js';
import mindeeFinancialDocumentAPI from './creates/mindee_financial_document.js';
import mindeeFrenchBankAccountDetails from './creates/mindee_fr_bank_account_details.js';
import mindeeUSBankCheck from './creates/mindee_us_bank_check.js';
import mindeeUSDrivingLicense from './creates/mindee_us_driving_license.js';
import fs from "fs";
import zapierPlatform from "zapier-platform-core";


const package_version = JSON.parse(fs.readFileSync('package.json', 'utf8'))['version'];

export default {
  version: package_version,
  platformVersion: zapierPlatform.version,
  authentication: authentication,
  creates: {
    [mindeeInvoice.key]: mindeeInvoice,
    [mindeeReceipt.key]: mindeeReceipt,
    [mindeePassport.key]: mindeePassport,
    [mindeeFrenchId.key]: mindeeFrenchId,
    [mindeeCustomAPI.key]: mindeeCustomAPI,
    [mindeeFinancialDocumentAPI.key]: mindeeFinancialDocumentAPI,
    [mindeeFrenchBankAccountDetails.key]: mindeeFrenchBankAccountDetails,
    [mindeeUSBankCheck.key]: mindeeUSBankCheck,
    [mindeeUSDrivingLicense.key]: mindeeUSDrivingLicense,
  }
};
