const login = require('./login');
module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    await login(page,scenario);
    await page.click('app-layout-header li a[href="/editor"]');
};