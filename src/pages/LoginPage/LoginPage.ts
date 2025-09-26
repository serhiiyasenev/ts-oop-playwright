import {Locator, Page} from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { LoginPageLocators } from "./LoginPageLocators";

export class LoginPage extends BasePage {
locators: LoginPageLocators;

    constructor(page: Page) {
         super(page);
         this.locators = new LoginPageLocators(page.locator("[data-test='login-container']"));
        }

    async navigateToLoginPage(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async enterUsername(username: string): Promise<void> {
        await this.locators.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.locators.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.locators.loginButton.click();
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.locators.errorMessage.textContent();
    }

    getUserNameInput(): Locator {
        return this.locators.usernameInput;
    }
}
