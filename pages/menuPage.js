class MenuPage {
    constructor(page) {
        this.page = page;
    }

    async resetAppState() {
        await this.page.click('#react-burger-menu-btn');
        await this.page.click('#reset_sidebar_link');
        await this.page.click('#react-burger-cross-btn');
    }
}

module.exports = MenuPage;