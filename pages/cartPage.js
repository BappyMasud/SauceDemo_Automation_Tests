class CartPage {
    constructor(page) {
        this.page = page;
    }

    getItems() {
        return this.page.locator('.cart_item');
    }

    async clickCheckout() {
        //await this.page.waitForLoadState('networkidle');
        await this.page.locator('[data-test="checkout"]').click();
    }
}

module.exports = CartPage;