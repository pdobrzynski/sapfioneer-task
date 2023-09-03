import { expect, test } from "@playwright/test";
import { MainPage } from "../page-object/main-page";
import { loadHomePage } from "../helpers";

test('Go to Home Page, click on Financial Control and verify redirection', async ({ page }) => {
    const mainPage = new MainPage(page);
    await loadHomePage(page);

    mainPage.hoverBookmark('Finance & ESG');
    mainPage.clickBookmarkItem('Financial Control');
    
    await expect(page).toHaveURL('/' + 'finance-esg/financial-control/');
});