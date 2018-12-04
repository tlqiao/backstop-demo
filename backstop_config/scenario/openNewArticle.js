const basicConfig = require('../basicConfig');
module.exports = {
    label: "openNewArticle",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/clickNewArticle.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}