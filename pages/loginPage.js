class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorReply = '[data-test="error"]'; 
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(id, passkey) {
        await this.page.fill(this.username, id);
        await this.page.fill(this.password, passkey);
        await this.page.click(this.loginButton);
    }

    async getError() {
        return this.page.locator(this.errorReply);
    }
}

module.exports = LoginPage;