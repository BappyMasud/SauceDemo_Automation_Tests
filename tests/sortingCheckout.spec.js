const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage');
const MenuPage = require('../pages/menuPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const userData = require('../datas/userData');

test('Q3 - Verify sorting products from Z to A', async ({ page }) => {

    const login = new LoginPage(page);
    const menu = new MenuPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();

    await login.login(userData.users.performance, userData.password);

    await menu.resetAppState();

    await inventory.sortByZToA();

    const product = await inventory.addFirstItem();

    await inventory.gotoCart();

    await expect(cart.getItems()).toContainText(product);

    await cart.clickCheckout();

    await checkout.fillinfo();

    await expect(checkout.getTotal()).toContainText('Total');

    await checkout.clickFinish();

    await expect(checkout.getConfirmation()).toHaveText('Thank you for your order!');

    await menu.resetAppState();

    await menu.logout();
});