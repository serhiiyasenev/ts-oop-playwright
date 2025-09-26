import { BasePage } from "../BasePage/BasePage";
import { ProductCardComponent } from "../../components/ProductCardComponents/ProductCardComponent";

export class ProductsPage extends BasePage {

getProductCard(productName: string): ProductCardComponent {
    const cardRoot = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });
    return new ProductCardComponent(cardRoot);
  }
}