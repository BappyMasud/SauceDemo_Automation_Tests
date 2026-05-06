# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginUserverification.spec.js >> Verify user by login
- Location: tests\loginUserverification.spec.js:5:1

# Error details

```
ReferenceError: data is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../pages/loginPage');
  3  | const userdata = require('../datas/userData');
  4  | 
  5  | test('Verify user by login', async ({ page }) => {
  6  |     const login = new LoginPage(page);
  7  |     await login.goto();
> 8  |     await login.login(data.users.locked, data.users.password);
     |                       ^ ReferenceError: data is not defined
  9  |     await expect(await login.getError()).toContainText('Epic sadface: Sorry, this user has been locked out.');
  10 | });
```