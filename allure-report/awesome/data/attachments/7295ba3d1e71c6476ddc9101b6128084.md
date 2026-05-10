# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sortingCheckout.spec.js >> Q3 - Verify sorting products from Z to A
- Location: tests\sortingCheckout.spec.js:9:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.cart_item')
Expected substring: "Sauce Labs Backpack"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.cart_item')

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
      - generic [ref=e15]: Your Cart
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: QTY
        - generic [ref=e20]: Description
      - generic [ref=e21]:
        - button "Go back Continue Shopping" [ref=e22] [cursor=pointer]:
          - img "Go back" [ref=e23]
          - text: Continue Shopping
        - button "Checkout" [ref=e24] [cursor=pointer]
  - contentinfo [ref=e25]:
    - list [ref=e26]:
      - listitem [ref=e27]:
        - link "Twitter" [ref=e28] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e29]:
        - link "Facebook" [ref=e30] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e31]:
        - link "LinkedIn" [ref=e32] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e33]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../pages/loginPage');
  3  | const MenuPage = require('../pages/menuPage');
  4  | const InventoryPage = require('../pages/inventoryPage');
  5  | const userData = require('../datas/userData');
  6  | const CartPage = require('../pages/cartPage');
  7  | const CheckoutPage = require('../pages/checkoutPage');
  8  | 
  9  | test('Q3 - Verify sorting products from Z to A', async ({ page }) => {
  10 |     const login = new LoginPage(page);
  11 |     const menu = new MenuPage(page);
  12 |     const inventory = new InventoryPage(page);
  13 |     const cart = new CartPage(page);
  14 |     const checkout = new CheckoutPage(page);
  15 | 
  16 |     await login.goto();
  17 |     await login.login(userData.users.performance, userData.password);
  18 | 
  19 |     await menu.resetAppState();
  20 |     // await inventory.sortByZToA();
  21 | 
  22 |     const product = await inventory.addFirstitem();
  23 | 
  24 |     await inventory.gotoCart();
> 25 |     await expect(cart.getItems()).toContainText(product);
     |                                   ^ Error: expect(locator).toContainText(expected) failed
  26 | 
  27 |     await cart.clickCheckout();
  28 |     await checkout.fillCheckoutForm('Ostad', 'Limited', '1207');
  29 | 
  30 |     await expect(checkout.getTotal()).toContainText(Total);
  31 | 
  32 |     await checkout.clickFinish();
  33 |     await expect(checkout.getSuccessMessage()).toHaveText('Thank you for your order!');
  34 | 
  35 |     await menu.resetAppState();
  36 |     await menu.logout();
  37 | });
```