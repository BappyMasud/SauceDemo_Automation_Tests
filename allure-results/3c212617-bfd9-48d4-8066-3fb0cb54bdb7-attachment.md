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

Locator:  locator('.summary_total_label')
Expected: "Item total: $55.97"
Received: "Total: $60.45"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.summary_total_label')
    9 × locator resolved to <div data-test="total-label" class="summary_total_label">Total: $60.45</div>
      - unexpected value "Total: $60.45"

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
        - generic [ref=e14]: "3"
      - generic [ref=e16]: "Checkout: Overview"
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e29]: $29.99
        - generic [ref=e30]:
          - generic [ref=e31]: "1"
          - generic [ref=e32]:
            - link "Sauce Labs Bike Light" [ref=e33] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e34]: Sauce Labs Bike Light
            - generic [ref=e35]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e37]: $9.99
        - generic [ref=e38]:
          - generic [ref=e39]: "1"
          - generic [ref=e40]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e41] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e42]: Sauce Labs Bolt T-Shirt
            - generic [ref=e43]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e45]: $15.99
      - generic [ref=e46]:
        - generic [ref=e47]: "Payment Information:"
        - generic [ref=e48]: "SauceCard #31337"
        - generic [ref=e49]: "Shipping Information:"
        - generic [ref=e50]: Free Pony Express Delivery!
        - generic [ref=e51]: Price Total
        - generic [ref=e52]: "Item total: $55.97"
        - generic [ref=e53]: "Tax: $4.48"
        - generic [ref=e54]: "Total: $60.45"
        - generic [ref=e55]:
          - button "Go back Cancel" [ref=e56] [cursor=pointer]:
            - img "Go back" [ref=e57]
            - text: Cancel
          - button "Finish" [ref=e58] [cursor=pointer]
  - contentinfo [ref=e59]:
    - list [ref=e60]:
      - listitem [ref=e61]:
        - link "Twitter" [ref=e62] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e63]:
        - link "Facebook" [ref=e64] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e65]:
        - link "LinkedIn" [ref=e66] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e67]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 30 |     await expect(checkout.getTotal()).toHaveText('Item total: $55.97');
     |                                       ^ Error: expect(locator).toHaveText(expected) failed
  31 | 
  32 |     await checkout.clickFinish();
  33 |     await expect(checkout.getConfirmation()).toHaveText('THANK YOU FOR YOUR ORDER');
  34 | 
  35 |     await menu.resetAppState();
  36 |     await menu.logout();
  37 | })
```