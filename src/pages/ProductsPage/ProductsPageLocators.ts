import { Locator } from "@playwright/test";
import { BaseLocators } from "../BasePage/BaseLocators";

export class ProductpageLocators extends BaseLocators {
    productTitle: Locator = this.baseLocator.locator('.product_label');
}