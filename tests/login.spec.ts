import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage/LoginPage';
import { ProductsPage } from '../src/pages/ProductsPage/ProductsPage';
import { PageFactory } from '../src/pages/PageFactory';

test('add backpack', async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);
  await loginPage.navigateToLoginPage('https://www.saucedemo.com/');
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();

  // Act
  const card = productPage.getProductCard('Sauce Labs Backpack');
  await card.clickAddToCartButton();

  // Assert
  await expect(await card.isRemoveButtonVisible()).toBeTruthy();
  await expect(await card.getRemoveButtonText()).toBe('Remove');

  new PageFactory().getIphnoePage(page);
});

