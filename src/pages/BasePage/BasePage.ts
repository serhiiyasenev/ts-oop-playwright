import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForElement(selector: string): Promise<void> {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }

    async getElementText(selector: string): Promise<string | null> {
        const element = await this.page.locator(selector);
        return await element.textContent();
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }
}