import { Locator, Page } from "playwright";

export class MainPage {
    readonly page: Page;
    readonly getInTouchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getInTouchButton = page.locator('#masthead').getByRole('link', { name: 'Get in touch' });
    }

    getBookmarkByText(bookmarkText: string) {
        return this.page.locator('.nav-top-link', { hasText: bookmarkText });
      }
    
    getBookmarkItemByText(bookmarkItemText: string) {
        return this.page.locator('.ux-menu-link', { hasText: bookmarkItemText });
    }

    async clickGetInTouchButton() {
       await this.getInTouchButton.click();
    }

    async hoverBookmark(bookmark: string) {
        await this.getBookmarkByText(bookmark).hover();
    }

    async clickBookmarkItem(bookmarkItem: string) {
        await this.getBookmarkItemByText(bookmarkItem).click();
    }
}