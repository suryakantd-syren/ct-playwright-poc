const { createBdd } = require('playwright-bdd');
const { Then, When } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
const { ActivityListPage } = require('../../page_objects/activity/ActivityListPage');
const { ActivityDefinitionPage } = require('../../page_objects/activity/ActivityDefinitionPage');

When('User clicks on {string} button in header [Activity-Table]', async function ({ context },button,) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const activityListPage = new ActivityListPage(newPage);
  await activityListPage.clickHeaderButton(button);
});

When('User verifies {string} is displayed [Page]', async function ({ context },activityName) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const activityDefPage = new ActivityDefinitionPage(newPage);
  await activityDefPage.verifyActivityName(activityName);
});



// Then('Verify Mark as final functionality', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'PEM');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityListPage.activityMarkAsFinal();
// });
/*

Then('Verify Restore functionality', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityRestore();
});

Then('Verify activity details page is loaded in readonly mode on click of view button from ellipse menu in [Page][{string}]', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityView();
});

Then('Verify activity details page is loaded on click of edit button from ellipse menu in [Page][{string}]', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.activityEdit();
});
*/