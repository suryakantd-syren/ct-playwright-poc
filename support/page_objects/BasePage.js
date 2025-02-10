const { expect } = require('@playwright/test');
class BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.signOutButton = page.getByRole('button', { name: 'Sign Out' });
        this.nextButton = page.locator('button#ButtonBarNext');
        this.header = (title) => page.getByTitle(title);
    }

    async verifyPageHeadingAndGoNext(title){
        this.page.waitForTimeout(1000);
        expect(this.header(title)).toBeVisible();
        await this.nextButton.click();
        await this.page.waitForLoadState();
    }
}


module.exports = { BasePage };
