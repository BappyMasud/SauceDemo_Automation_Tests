const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const MenuPage = require('../pages/menuPage');
const userData = require('../datas/userData');

test('Order checkout flow', async ({ page }) => {
    const login = new LoginPage(page);
    const menu = new MenuPage(page);

    await login.goto();
    await login.login(userData.users.standard, userData.password);

    await menu.resetAppState();
})