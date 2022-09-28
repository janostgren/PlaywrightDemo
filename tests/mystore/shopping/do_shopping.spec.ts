import { test, expect, Page,Locator } from '@playwright/test'


test.describe.serial('buy a dress', () => {

    let page: Page;
    let addToCart: Locator;
    

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.afterAll(async () => {
        await page.close();
    });


    test('Start', async () => {
        await page.goto('http://automationpractice.com/index.php');
        const contact_us = page.locator('#contact-link');
        await expect(contact_us).toHaveText('Contact us');

    });

    test('Search', async () => {
        
        await page.fill('#search_query_top', "Dress");
        await page.locator('#searchbox > button').click();

        const counter = page.locator('#center_column > h1 > span.heading-counter');
        await expect(counter).toBeVisible();
        await expect(counter,'Must find products').not.toHaveText('0 results have been found.');

    });


    test('View product', async () => {

       await page.locator('#list').click();

       page.locator('#center_column > ul > li:nth-child(1) > div > div > div.left-block.col-xs-4.col-xs-5.col-md-4 > div > a.product_img_link').click()

        //const product=page.locator('#product');
        //await expect(product).toBeVisible();

    });


    test('Add to Cart', async () => {

        await page.locator('a.btn.btn-default.button-plus.product_quantity_up').click();
        await addToCart.click();

        await page.locator('text="Proceed to checkout"').click();
       
    });

});







