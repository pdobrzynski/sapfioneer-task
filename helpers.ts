import { Page, expect } from "@playwright/test";

export async function loadHomePage(page: Page) {
    await page.goto('/');
}

export async function assertVisibilityOfLocator(visibility: boolean, locator: any) {
    if(visibility) {
        await expect(locator).toBeVisible();
    } else {
        await expect(locator).toBeHidden();
    }
    
}