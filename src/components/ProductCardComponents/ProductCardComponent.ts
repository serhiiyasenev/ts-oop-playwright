import { Locator } from "@playwright/test";
import { BaseComponent } from "../BaseComponent";
import { ProductCardComponentLocators } from "./ProductCardComponentLocators";

export class ProductCardComponent extends BaseComponent {

    locators: ProductCardComponentLocators = new ProductCardComponentLocators(this.baseLocator);

    constructor(locator: Locator) {
        super(locator);
    }

    async clickAddToCartButton(): Promise<void> {
        await this.locators.addToCartButtonLocator.click();
    }

    async isRemoveButtonVisible(): Promise<boolean> {
        return await this.locators.removeFromCartButtonLocator.isVisible();
    }

    async getRemoveButtonText(): Promise<string | null> {
        return await this.locators.removeFromCartButtonLocator.textContent();
    }
}