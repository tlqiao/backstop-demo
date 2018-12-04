const basicConfig = require('../basicConfig');
module.exports = {
    label: "signOutPage",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/clickSignOut.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}