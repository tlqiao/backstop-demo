module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    await page.goto('https://angular.realworld.io');
    await page.click('app-layout-header li a[href="/register"]');
};