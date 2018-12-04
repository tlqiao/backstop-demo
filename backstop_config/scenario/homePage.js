const basicConfig = require('../basicConfig');
module.exports = {
    label: "homePageAfterLogin",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/login.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}