const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const MenuPage = require('../pages/menuPage');
const InvantoryPage = require('../pages/inventoryPage');
const userData = require('../datas/userData');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');

test('Order checkout flow', async ({ page }) => {
    const login = new LoginPage(page);
    const menu = new MenuPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.goto();
    await login.login(userData.users.standard, userData.password);

    await menu.resetAppState();

    await inventory.addFirstThreeItemsToCart();
    await inventory.gotoCart();

    await expect(cart.getItems()).toHaveCount(3);
})