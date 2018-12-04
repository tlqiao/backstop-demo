const basicConfig = require('../basicConfig');
module.exports = {
    label: "openSignUp",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/clickSignUp.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}