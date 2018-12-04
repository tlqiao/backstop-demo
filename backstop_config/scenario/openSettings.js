const basicConfig = require('../basicConfig');
module.exports = {
    label: "openSettings",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/clickSettings.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}