import { expect } from '@playwright/test';
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();

When('User clicks on {string} action in [Page][{string}]', async function ({ context }, actionId, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const pageFooter = await newPage.locator(`.sfg--page--${pageId} .sfg--page--actions`);
  await expect(pageFooter).toBeVisible();
  const actionBtn = await pageFooter.getByRole('button', { name: actionId });
  await expect(actionBtn).toBeVisible();
  await actionBtn.click();
});

When('User clicks on {string} button in [Page][{string}]', async function ({ context }, actionId, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');

  const page = await newPage.locator(`.sfg--page--${pageId}`);
  await expect(page).toBeVisible();
  const actionBtn = await page.locator(`button[name='${actionId}']`); // await page.getByRole('button', { name: actionId });
  await expect(actionBtn).toBeVisible();
  await actionBtn.click();
});

Then('User verifies {string} image is visible [Page][{string}]', async function ({ context }, actionId, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');

  const page = await newPage.locator(`.sfg--page--${pageId}`);
  await expect(page).toBeVisible();
  const actionBtn = await page.locator(`button[name=${actionId}]`);
  await expect(actionBtn).toBeVisible();
  await actionBtn.click();
});
