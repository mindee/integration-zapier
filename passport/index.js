
const authentication = require('./authentication');
const mindeeCreate = require('./creates/mindee.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [mindeeCreate.key]: mindeeCreate },

};


