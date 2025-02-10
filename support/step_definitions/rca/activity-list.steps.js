const { createBdd } = require('playwright-bdd');
const { Then, When } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
const { RCAModelListPage } = require('../../page_objects/rca/RCAModelListPage');
const { RCAModelDefinitionPage } = require('../../page_objects/rca/RCAModelDefinitionPage');

When('User clicks on {string} button in header [RCAModel-Table]', async function ({ context },button,) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const activityListPage = new RCAModelListPage(newPage);
  await activityListPage.clickHeaderButton(button);
});

When('User verifies {string} is displayed [Page]', async function ({ context },activityName) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const activityDefPage = new RCAModelDefinitionPage(newPage);
  await activityDefPage.verifyRCAModelName(activityName);
});



// Then('Verify Mark as final functionality', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityListPage.activityMarkAsFinal();
// });
/*

Then('Verify Restore functionality', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityRestore();
});

Then('Verify RCAModel details page is loaded in readonly mode on click of view button from ellipse menu in [Page][{string}]', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityView();
});

Then('Verify RCAModel details page is loaded on click of edit button from ellipse menu in [Page][{string}]', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityEdit();
});
*/