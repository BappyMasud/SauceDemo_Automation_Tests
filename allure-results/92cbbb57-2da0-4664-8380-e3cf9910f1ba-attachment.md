# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderConfirmation.spec.js >> Order checkout flow
- Location: tests\orderConfirmation.spec.js:10:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.complete-header')
Expected: "Thank you for your order"
Received: "Thank you for your order!"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.complete-header')
    9 × locator resolved to <h2 class="complete-header" data-test="complete-header">Thank you for your order!</h2>
      - unexpected value "Thank you for your order!"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: "Checkout: Complete!"
    - generic [ref=e16]:
      - img "Pony Express" [ref=e17]
      - heading "Thank you for your order!" [level=2] [ref=e18]
      - generic [ref=e19]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - button "Back Home" [ref=e20] [cursor=pointer]
  - contentinfo [ref=e21]:
    - list [ref=e22]:
      - listitem [ref=e23]:
        - link "Twitter" [ref=e24] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e25]:
        - link "Facebook" [ref=e26] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e27]:
        - link "LinkedIn" [ref=e28] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e29]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../pages/loginPage');
  3  | const MenuPage = require('../pages/menuPage');
  4  | const InvantoryPage = require('../pages/inventoryPage');
  5  | const userData = require('../datas/userData');
  6  | const InventoryPage = require('../pages/inventoryPage');
  7  | const CartPage = require('../pages/cartPage');
  8  | const CheckoutPage = require('../pages/checkoutPage');
  9  | 
  10 | test('Order checkout flow', async ({ page }) => {
  11 |     const login = new LoginPage(page);
  12 |     const menu = new MenuPage(page);
  13 |     const inventory = new InventoryPage(page);
  14 |     const cart = new CartPage(page);
  15 |     const checkout = new CheckoutPage(page);
  16 | 
  17 |     await login.goto();
  18 |     await login.login(userData.users.standard, userData.password);
  19 | 
  20 |     await menu.resetAppState();
  21 | 
  22 |     await inventory.addFirstThreeItemsToCart();
  23 |     await inventory.gotoCart();
  24 | 
  25 |     await expect(cart.getItems()).toHaveCount(3);
  26 |     
  27 |     await cart.clickCheckout();
  28 |     await checkout.fillinfo();
  29 | 
  30 |     await expect(checkout.getTotal()).toHaveText('Total: $60.45');
  31 | 
  32 |     await checkout.clickFinish();
> 33 |     await expect(checkout.getConfirmation()).toHaveText('Thank you for your order');
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  34 | 
  35 |     await menu.resetAppState();
  36 |     await menu.logout();
  37 | })
```