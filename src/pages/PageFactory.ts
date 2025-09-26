import { Page } from "@playwright/test";

export class PageFactory {
  getIphnoePage(page: Page){
    return new ProductPage(page, 'iPhone', []);
  }

  getAndroidPage(page: Page){
    return new ProductPage(page, 'Android', []);
  }
}

class ProductPage{
    constructor(page: Page, name: string, components: Array<any>){  
    }   
}
