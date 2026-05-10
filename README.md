# SauceDemo Automation Testing Project

## Project Overview

This project contains automated end-to-end test scenarios for the SauceDemo web application using an automation testing framework. The purpose of this project is to validate important user workflows such as login validation, cart functionality, checkout process, product verification, and successful order completion.

Application Under Test (AUT):  
https://www.saucedemo.com/

---

# Project Objectives

The main objectives of this project are:

- Validate login functionality with different user types
- Verify error handling for locked users
- Automate end-to-end purchase workflows
- Validate cart and checkout functionalities
- Verify product names and total prices
- Implement App State Reset functionality
- Generate execution reports after test execution
- Execute test cases individually and sequentially

---

# Assignment Scenarios Covered

## Test Scenario 1 — Locked User Login Validation

### Objective

Verify that the system displays the correct error message when attempting to log in with a locked user account.

### Test Steps

- Navigate to the SauceDemo login page
- Login using:
  - Username: `locked_out_user`
  - Password: `secret_sauce`
- Verify the displayed error message

### Expected Result

The application should display the appropriate locked user error message.

---

## Test Scenario 2 — Standard User Purchase Flow

### Objective

Validate the complete purchase workflow using the `standard_user` account.

### Test Steps

- Login with `standard_user`
- Open the hamburger menu
- Reset App State
- Add any three products to the cart
- Navigate to the cart page
- Proceed to checkout
- Enter checkout information
- Verify:
  - Product names
  - Total price
- Complete the order
- Verify successful order confirmation message
- Reset App State again
- Logout from the application

### Expected Result

The order should be completed successfully with correct product and pricing validation.

---

## Test Scenario 3 — Performance Glitch User Purchase Flow

### Objective

Validate product sorting and checkout functionality using the `performance_glitch_user` account.

### Test Steps

- Login with `performance_glitch_user`
- Reset App State
- Filter products by:
  - Name (Z to A)
- Add the first displayed product to the cart
- Navigate to checkout
- Verify:
  - Product name
  - Total price
- Complete the purchase process
- Verify successful order confirmation message
- Reset App State again
- Logout from the application

### Expected Result

The product sorting, checkout process, and order completion & confirmation should work correctly.

---

# Technologies & Tools Used

## Automation Framework

- Playwright

## Programming Language

- JavaScript

## Additional Tools

- Node.js
- Allure Report
- Git & GitHub
- VS Code

---

# Project Structure

```plaintext
project-root/
│
├── allure-report/
├── allure-results/
├── datas/
├── pages/
├── tests/
├── .gitignore/
├── README.md
├── screenshots/
├── package-lock.json
├── package.json
└── playwright.config.js
```

---

# Framework Design Pattern

This project follows the **Page Object Model (POM)** design pattern to improve:

- Code reusability
- Test maintainability
- Readability
- Scalability

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/BappyMasud/SauceDemo_Automation_Tests.git
```

## Navigate to Project Folder

```bash
cd SauceDemo_Automation_Tests
```

## Install Project Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

# Test Execution

## Run All Test Scenarios

```bash
npx playwright test
```

## Run Individual Test Files

### Scenario 1

```bash
npx playwright test tests/loginUserverification.spec.js
```

### Scenario 2

```bash
npx playwright test tests/orderConfirmation.spec.js
```

### Scenario 3

```bash
npx playwright test tests/sortingCheckout.spec.js
```

---

# Allure Report Generation

## Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

## Open Allure Report

```bash
allure open allure-report
```

---

# Validations Performed

The automation suite performs the following validations:

- Error message validation
- Product name verification
- Total price verification
- Successful order confirmation verification
- Cart functionality validation
- Sorting functionality validation
- Logout functionality validation

---

# Reporting

This project supports:

- Console execution reports
- Allure HTML reports
- Screenshot capturing on failure

---

# Key Features

- End-to-end automation testing
- Sequential execution support
- Separate test execution support
- Reusable page objects
- Clean folder structure
- Scalable automation framework
- Allure reporting integration

---

# Challenges Faced During Automation

- Dynamic element synchronization
- Handling delayed responses for performance glitch user
- Cart item validation
- Price calculation verification
- Maintaining reusable locators

---

# Learning Outcomes

Through this project, the following skills were improved:

- Automation framework implementation
- Page Object Model architecture
- End-to-end UI testing
- Test reporting integration
- Assertion handling
- Real-world automation workflow implementation

---

# Future Improvements

Possible future enhancements:

- CI/CD integration
- Docker integration
- Jenkins pipeline setup
- Data-driven testing
- Environment configuration support

---

# Repository Requirement

As required in the assignment:

- All source code has been uploaded to a public GitHub repository
- All three scenarios can run individually
- All scenarios can run sequentially
- Allure reports are generated after execution
- README documentation is included for setup and execution guidance

---

# Author

## Md Sohel Al Masud

- GitHub: https://github.com/BappyMasud
- LinkedIn: https://www.linkedin.com/in/mdsohelalmasud

---

# Conclusion

This automation testing project successfully validates multiple critical workflows of the SauceDemo application. The framework is designed to be scalable, maintainable, and reusable while following standard automation testing best practices.