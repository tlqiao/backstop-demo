const postNewArticle = require('./postNewArticle');
module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    await postNewArticle(page,scenario);
    await page.type('app-article-page form textarea','this is a comment for article');
    await page.click('app-article-page form button[type="submit"]');
    await page.waitForSelector('app-article-page app-article-comment');
};