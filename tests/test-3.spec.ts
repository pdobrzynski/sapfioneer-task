import { expect, test } from "@playwright/test";
import { MainPage } from "../page-object/main-page";
import { ContactPage } from "../page-object/contact-page";
import { loadHomePage, assertVisibilityOfLocator } from "../helpers";

const validationArray = [
    { field: 'firstname', message: 'Please complete this required field.' },
    { field: 'lastname', message: 'Please complete this required field.' },
    { field: 'email', message: 'Please complete this required field.' },
    { field: 'country__new_', message: 'Please select an option from the dropdown menu.' },
    { field: 'how_can_we_help_you_', message: 'Please complete this required field.' },
    { field: 'error_rollup', message: 'Please complete all required fields.' },
  ];

const legalConsentErrorMessage = 'Please complete this required field.'

test('Go to Home Page, redirect to contact page, submit empty form and validate error messages', async ({ page }) => {
    const mainPage = new MainPage(page);
    const contactPage = new ContactPage(page);
    await loadHomePage(page);

    mainPage.clickGetInTouchButton();
    await expect(page).toHaveURL('/' + 'contact/');
    await contactPage.clickSubmitForm();

    for(const label of validationArray) {
        await assertVisibilityOfLocator(true, contactPage.labelErrorMessage(label.field, label.message))
    };
    await assertVisibilityOfLocator(true, contactPage.legalConsentErrorMessage(legalConsentErrorMessage))
});