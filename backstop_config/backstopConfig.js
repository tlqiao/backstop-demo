const basicConfig = require('./basicConfig');
const openSignUp = require('./scenario/openSignUp');
const homePage = require('./scenario/homePage');
const openNewArticle = require('./scenario/openNewArticle');
const openSettings = require('./scenario/openSettings');
const signOutPage = require('./scenario/signOut');
const postNewArticle= require('./scenario/postNewArticle');
const postComment= require('./scenario/postComment');
const viewports = [];
const scenarios = [];
scenarios.push(openSignUp);
scenarios.push(homePage);
scenarios.push(openNewArticle);
scenarios.push(postNewArticle);
scenarios.push(postComment);
scenarios.push(openSettings);
scenarios.push(signOutPage);
basicConfig.typeOfViewPort.map(it => {
    if (it == 'phone') {
        viewports.push({
            label: it,
            width: 320,
            height: 480,
        })
    }
    if (it == 'tablet') {
        viewports.push({
            label: it,
            width: 320,
            height: 480
        })
    }
    if (it == 'desktop') {
        viewports.push({
            label: it,
            width: 1280,
            height: 1024,
        })
    }
});
module.exports = {
    "id": basicConfig.projectId,
    "viewports": viewports,
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
        "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
}