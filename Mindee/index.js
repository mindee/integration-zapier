

const authentication = require('./authentication');
const mindeeInvoice = require('./creates/mindee_invoice.js');
const mindeePassport = require('./creates/mindee_passport.js');
const mindeeReceipt = require('./creates/mindee_receipt.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [mindeeInvoice.key]: mindeeInvoice,
              [mindeeReceipt.key]: mindeeReceipt,
              [mindeePassport.key]: mindeePassport
          },

};


