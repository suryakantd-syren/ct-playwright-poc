//import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { DataUtils } = require("../../../utils/DataUtils");
const dataUtils = new DataUtils();



Then('Verify {string} page is displayed [Page][{string}]', async function ({context},pageTitle, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
 
  // const textEle = await newPage.locator(`.${pageId}-container .cds--data-table-container .cds--data-table-header .cds--data-table-header__title`);
  // await expect(textEle).toBeVisible();
  // const text = await textEle.textContent();
  const text = await newPage.locator('.header-button-right').textContent();
  await expect(text).toBe(pageTitle);
});

When('User clicks on {string} link in [Page][{string}]', async function ({context},text, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');

  const actionBtn = await newPage.getByText(text);
  await expect(actionBtn).toBeVisible();
  await actionBtn.click();
});

When('User waits for api call for {int}', { timeout: 20 * 1000 }, async function ({context},waitTime) {
  // Write code here that turns the phrase above into concrete actions
  let newPage = await dataUtils.getPage(context, 'PEM');

  await newPage.waitForTimeout(waitTime);
});

When('User waits for {int} seconds for application to process', { timeout: 20 * 1000 }, async function ({context},waitTime) {
  // Write code here that turns the phrase above into concrete actions
  let newPage = await dataUtils.getPage(context, 'PEM');

  await newPage.waitForTimeout(waitTime);
});
