const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const MenuPage = require('../pages/menuPage');
const InvantoryPage = require('../pages/inventoryPage');
const userData = require('../datas/userData');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

test('Q2 - Standard User Purchase Flow', async ({ page }) => {
    const login = new LoginPage(page);
    const menu = new MenuPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(userData.users.standard, userData.password);

    await menu.resetAppState();

    await inventory.addFirstThreeItemsToCart();
    await inventory.gotoCart();

    await expect(cart.getItems()).toHaveCount(3);
    
    await cart.clickCheckout();
    await checkout.fillinfo();

    await expect(checkout.getTotal()).toHaveText('Total: $60.45');

    await checkout.clickFinish();
    await expect(checkout.getConfirmation()).toHaveText('Thank you for your order!');

    await menu.resetAppState();
    await menu.logout();
})