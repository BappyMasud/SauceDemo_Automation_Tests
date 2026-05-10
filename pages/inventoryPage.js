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
        await this.page.selectOption('[data-test="product-sort-container"]', 'za');
    }

    async addFirstItem() {
    const firstItem = this.page.locator('.inventory_item').first();
    const name = await firstItem.locator('.inventory_item_name').textContent();
    await firstItem.locator('button').click();
    return name;
    }
}

module.exports = InventoryPage;