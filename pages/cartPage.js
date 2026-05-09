class CartPage {
    constructor(page) {
        this.page = page;
    }

    getItems() {
        return this.page.locator('.cart_item');
    }
}

module.exports = CartPage;