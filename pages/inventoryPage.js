class InventoryPage {
    constructor(page) {
        this.page = page;
    }

    async addFirstThreeItemsToCart() {
        for (let i = 0; i < 3; i++) {
            await this.page.locator('.inventory_item button').nth(i).click();
        }
    }

    async gotoCart() {
        await this.page.click('[data-test="shopping-cart-link"]');
    }


}

module.exports = InventoryPage;