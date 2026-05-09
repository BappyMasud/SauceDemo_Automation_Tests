class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async fillinfo() {
        await this.page.waitForLoadState('networkidle');
        await this.page.fill('[data-test="firstName"]', 'Bappy');
        await this.page.fill('[data-test="lastName"]', 'Masud');
        await this.page.fill('[data-test="postalCode"]', '1229');
        await this.page.click('[data-test="continue"]');
    }

    getTotal() {
        return this.page.locator('.summary_total_label');
    }

    async clickFinish() {
        await this.page.click('[data-test="finish"]');
    }

    getConfirmation() {
        return this.page.locator('.complete-header');
    }
}

module.exports = CheckoutPage;