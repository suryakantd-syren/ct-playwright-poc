const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, Then } = createBdd();
//const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const dataUtils = new DataUtils();
const portals = dataUtils.getPortals();


Given("I'm logged into the CC2.0 Applcaition with user {string}", async function ({ context }) {
    let newPage = await dataUtils.getPage(context, "CC");
    await newPage.goto(portals["CC"].url);
    await newPage.bringToFront();
    //const credentials = await dataUtils.getLoginCredentials("CC");
    //const newPageConstants = new PageConstants(newPage);
    //await newPageConstants.CCLoginPage.loginApplication(credentials.userName, credentials.password);
    //const pageTitle = await newPage.title();
   // expect(pageTitle).toBe(portals["CC"].title);
});


Then("I should see the CC2.0 Application", async function ({ context }) {
    let newPage = await dataUtils.getPage(context, "CC");
    const pageTitle = await newPage.title();
    expect(pageTitle).toBe(portals["CC"].title);
});



Given("I'm logged into the CC App", async function ({ context }) {
    let newPage = await dataUtils.getPage(context, "CC");
    await newPage.goto(portals["CC"].url);
    await newPage.bringToFront();
   // const credentials = await dataUtils.getLoginCredentials("CC");
    //const newPageConstants = new PageConstants(newPage);
    //await newPageConstants.CCLoginPage.loginApplication(credentials.userName, credentials.password);
    //const pageTitle = await newPage.title();
   // expect(pageTitle).toBe(portals["CC"].title);
});


Then("I should see the CC App", async function ({ context }) {
    let newPage = await dataUtils.getPage(context, "CC");
    const pageTitle = await newPage.title();
    expect(pageTitle).toBe(portals["CC"].title);
});