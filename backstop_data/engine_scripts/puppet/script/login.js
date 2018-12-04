module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    await page.goto('https://angular.realworld.io');
    await page.click('app-layout-header li a[href="/login"]');
    await page.type('app-auth-page form input[formcontrolname="email"]', "e2etest@163.com");
    await page.type('app-auth-page form input[formcontrolname="password"]', "12345678");
    await Promise.all([page.click('app-auth-page button[type="submit"]')]);
    await page.waitForSelector('app-layout-header li a[href="/editor"]')
};