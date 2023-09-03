import { Locator, Page } from "playwright";


export class ContactPage {
    readonly page: Page;
    readonly submitButton: Locator
    readonly legalConsentContainer: Locator

    constructor(page: Page) {
        this.page = page;
        this.submitButton = page.frameLocator('iframe#hs-form-iframe-0').getByRole('button', { name: 'Submit' });
    }

    async clickSubmitForm() {
        await this.submitButton.click();
    }

    labelErrorMessage(label: string, errorMessage: string) {
        return this.page.frameLocator('iframe#hs-form-iframe-0').locator(`.hs_${label}`, { 
            has: this.page.locator('li'),
            hasText: errorMessage
            });
    }
    legalConsentErrorMessage(errorMessage: string) {
        return this.page.frameLocator('iframe#hs-form-iframe-0').locator('.legal-consent-container', {
            has: this.page.locator('.hs-dependent-field', {
                has: this.page.locator('li'),
                hasText: errorMessage
            })
        })
        }
    }