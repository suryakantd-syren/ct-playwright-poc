const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
import { expect } from '@playwright/test';

When('User navigates to {string} under {string} [App-Nav]', async function ({ context }, subMenu, menu) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  await newPage.locator('.cds--header__menu-bar li a').filter({ hasText: menu }).click();
  await newPage.locator('.cds--side-nav__item a .cds--side-nav__link-text').filter({ hasText: subMenu }).click();
  await newPage.locator('[data-testid="side-nav-toggle-button"]').click();
});

Then('User verifies {string} is displayed as current breadscrumb on [Page][{string}]', async function ({ context }, breadscrumb, pageId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const textEle = await newPage.locator(`.cds--breadcrumb .cds--breadcrumb-item--current a`).filter({ hasText: breadscrumb });
  await expect(textEle).toBeVisible();
  const text = await textEle.textContent();
  await expect(text).toBe(breadscrumb);
});
