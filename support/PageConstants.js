const { BasePage } = require("./page_objects/BasePage");
const { LoginPage } = require("./page_objects/LoginPage");
const { RCAModelListPage } = require("./page_objects/rca/RCAModelListPage");
const { RCAModelDefinitionPage } = require("./page_objects/rca/RCAModelDefinitionPage");
const { RCAModelVersionDrawer } = require("./page_objects/rca/RCAModelVersionDrawer");
const { RolloutWizard } = require("./page_objects/rca/RolloutWizard");
const { CCHomePage } = require("./page_objects/HomePage");
const { RCAModelDataTable } = require("./page_objects/rca/RCAModelDataTable");

class PageConstants {
    constructor(page) {
        this.basePage = new BasePage(page);
        this.CCLoginPage = new LoginPage(page);
        this.CCHomePage = new CCHomePage(page);
        this.activityListPage = new RCAModelListPage(page);
        this.activityVersionDrawer = new RCAModelVersionDrawer(page);
        this.activityDefinitionPage = new RCAModelDefinitionPage(page);
        this.rolloutWizard = new RolloutWizard(page);
        this.activityDataTable = new RCAModelDataTable(page);
 }
}

module.exports = { PageConstants };