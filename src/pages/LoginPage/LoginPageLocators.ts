import { Locator } from "@playwright/test";
import { BaseLocators } from "../BasePage/BaseLocators";

export class LoginPageLocators extends BaseLocators {
    usernameInput: Locator = this.baseLocator.getByRole('textbox', { name: 'Username' });
    passwordInput: Locator  = this.baseLocator.getByRole('textbox', { name: 'Password' });
    loginButton: Locator = this.baseLocator.getByRole('button', { name: 'Login' });
    errorMessage: Locator = this.baseLocator.locator('.error-message-container');
}