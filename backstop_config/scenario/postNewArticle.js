const basicConfig = require('../basicConfig');
module.exports = {
    label: "postNewArticle",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/postNewArticle.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}