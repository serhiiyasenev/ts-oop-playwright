import { Locator } from "@playwright/test";
import { BaseLocators } from "../../pages/BasePage/BaseLocators";


export class ProductCardComponentLocators extends BaseLocators {
    addToCartButtonLocator: Locator  = this.baseLocator.getByRole('button', { name: 'Add to cart' });
    removeFromCartButtonLocator: Locator  = this.baseLocator.getByRole('button', { name: 'Remove' });
}