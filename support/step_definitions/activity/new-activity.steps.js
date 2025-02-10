const { createBdd } = require('playwright-bdd');
const { Then, Given } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();

const { PageConstants } = require('../../PageConstants');

Given('User fill the definition details for new activity', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDefinitionPage.fillActivityDefination();
});

Given('User drags {string} block and fills details on definition tab', async function ({ context }, blockName) {
  // ------------------------------------- Task Drag and Drop ----------------------------------------------------
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  //await this.page.waitForTimeout(30);
  await newPageConstants.activityDefinitionPage.dragBlock(blockName);
  await newPageConstants.activityDefinitionPage.fillsDetails(blockName);
});

Given('User connects {string} node and {string} node', async function ({ context }, startTaskNode, endTaskNode) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDefinitionPage.connectTaskNode(startTaskNode, endTaskNode);
});

Given('User fill the exit validation for {string}', async function ({ context }, blockName) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  //await this.page.waitForTimeout(30);
  await newPageConstants.activityDefinitionPage.exitCondition();
});

Given('User connects start node to {string} node and {string} node to end node', async function ({ context }, startNode, endNode) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  //await this.page.waitForTimeout(30);
  await newPageConstants.activityDefinitionPage.connectsNode(startNode, endNode);
});

Given('User save the new activity', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  //await this.page.waitForTimeout(30);
  await newPageConstants.activityDefinitionPage.saveActivity();
});

Then('User verifies activity list page after save completion', async function ({ context }) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  //await this.page.waitForTimeout(30);
  await newPageConstants.activityDefinitionPage.activityVerify();
});
