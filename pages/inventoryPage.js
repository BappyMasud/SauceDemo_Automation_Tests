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

    async sortByZToA() {
        await this.page.selectOption('[data-test="product_sort_container"]', 'za');
    }

    async addFirstitem() {
        const name = await this.page.locator('inventory_item_name').first().textContent();
        await this.page.locator('.inventory_item_name').first().click();
        return name;
    }
}

module.exports = InventoryPage;