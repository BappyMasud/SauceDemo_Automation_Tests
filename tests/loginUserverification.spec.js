const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const userdata = require('../datas/userData');
const userData = require('../datas/userData');

test('Verify user by login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(userData.users.locked, userData.password);
    await expect(await login.getError()).toContainText('Epic sadface: Sorry, this user has been locked out.');
});