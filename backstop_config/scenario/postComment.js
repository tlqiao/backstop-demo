const basicConfig = require('../basicConfig');
module.exports = {
    label: "postComment",
    url: `${basicConfig.baseUrl}`,
    onReadyScript: './puppet/script/postComment.js',
    delay: `Number(${basicConfig.delay})`,
    requireSameDimensions: false,
}