class PEMHomePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.welcomeText = page.locator('span#m_WelcomeMessage');
        this.navbarManage = page.locator('a[data-title="Manage"]');
        this.admissions = page.locator('//span[normalize-space()="Admissions"]');
        this.patientLookupOption = page.locator('a[name="admissions_2__patient_admission_look_up_"]');
    }

    async navigateToPatientLookUp() {
        await this.navbarManage.click();
        await this.admissions.click();
        await this.patientLookupOption.click();
        this.page.waitForLoadState();
    }
}
module.exports = { PEMHomePage };