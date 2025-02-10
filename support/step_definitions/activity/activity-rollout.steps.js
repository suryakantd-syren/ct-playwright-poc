//import { Then, When } from '@cucumber/cucumber';
const { createBdd } = require('playwright-bdd');
const { Then, When } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
const { PageConstants } = require('../../PageConstants');


When('User rollouts the Activity to Internal Users', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.rolloutWizard.rolloutToInternalUsers();
});
