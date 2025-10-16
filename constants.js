const packageJson = require('./package.json');

module.exports = {
    appVersion: packageJson.version,
    MINDEE_V1_BASE_URL: "https://api.mindee.net",
};
