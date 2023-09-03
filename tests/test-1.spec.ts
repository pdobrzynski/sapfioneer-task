import { test } from "@playwright/test";
import { MainPage } from "../page-object/main-page";
import { loadHomePage, assertVisibilityOfLocator } from "../helpers";

const bookmarks = [
    "Banking",
    "Insurance",
    "Finance & ESG",
    "Services",
    "Partners",
    "Company",
    "Resources"
]

test('Go to Home Page and verify if the bookmarks are visible', async ({ page }) => {
    const mainPage = new MainPage(page);
    await loadHomePage(page);

    for (const bookmark of bookmarks) {
        await assertVisibilityOfLocator(true, mainPage.getBookmarkByText(bookmark))
    };
});