class LoginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.userNameTextBox = page.locator('input#UserNameTextBox');      
        this.passwordTextBox = page.locator('input#PasswordTextBox');
        this.loginButton =  page.locator('div[id="btnLoginHack"]');
        this.welcomeText = page.locator('span#m_WelcomeMessage')
    }

    async loginApplication(userName, password) {
        await this.userNameTextBox.fill(userName);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}
module.exports = { LoginPage };