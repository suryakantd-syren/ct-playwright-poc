const { BasePage } = require("./page_objects/BasePage");
const { LoginPage } = require("./page_objects/LoginPage");
const { ActivityListPage } = require("./page_objects/activity/ActivityListPage");
const { ActivityDefinitionPage } = require("./page_objects/activity/ActivityDefinitionPage");
const { ActivityVersionDrawer } = require("./page_objects/activity/ActivityVersionDrawer");
const { RolloutWizard } = require("./page_objects/activity/RolloutWizard");
const { PEMHomePage } = require("./page_objects/HomePage");
const { ActivityDataTable } = require("./page_objects/activity/ActivityDataTable");

class PageConstants {
    constructor(page) {
        this.basePage = new BasePage(page);
        this.pemLoginPage = new LoginPage(page);
        this.pemHomePage = new PEMHomePage(page);
        this.activityListPage = new ActivityListPage(page);
        this.activityVersionDrawer = new ActivityVersionDrawer(page);
        this.activityDefinitionPage = new ActivityDefinitionPage(page);
        this.rolloutWizard = new RolloutWizard(page);
        this.activityDataTable = new ActivityDataTable(page);
 }
}

module.exports = { PageConstants };