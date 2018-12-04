const login = require('./login');
module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    await login(page,scenario);
    await page.click('app-layout-header li a[href="/editor"]');
    await page.waitForSelector('app-editor-page input[formcontrolname="title"]',5000);
    await page.type('app-editor-page input[formcontrolname="title"]','visualTest');
    await page.type('app-editor-page input[formcontrolname="description"]','visualTestDescription');
    await page.type('app-editor-page textarea[formcontrolname="body"]','VisualTestContent');
    await page.click('app-editor-page form button');
    await page.waitForSelector('app-article-page h1');
};