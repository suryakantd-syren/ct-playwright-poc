const { createBdd } = require('playwright-bdd');
const { When } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
const { PageConstants } = require('../../PageConstants');

When('User open version drawer by click of version history icon', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'CC');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityListPage.openVersionDrawer("rcamodel-list");
});


// Then('Verify version Rollout functionality', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityVersionDrawer.versionRollout();
// });


// Then('Verify version Mark as final functionality', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityVersionDrawer.versionMarkAsFinal();
// });


// Then('Verify version Restore functionality', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityVersionDrawer.versionRestore();
// });

// Then('Verify activities version list to view the RCAModel in [Page][{string}]', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityVersionDrawer.activityVersionView();
// });

// Then('Verify activities version list to edit the RCAModel in [Page][{string}]', async function ({ context }) {
//   let newPage = await dataUtils.getPage(context, 'CC');
//   const newPageConstants = new PageConstants(newPage);
//   await newPageConstants.activityVersionDrawer.activityVersionEdit();
// });