const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { DataUtils } = require('../../../utils/DataUtils');
const dataUtils = new DataUtils();
const { PageConstants } = require('../../PageConstants');

//perform forward, backword
When('User clicks on {string} button in pagination bar in [Activity-Table][{string}]', async function ({ context }, actionType, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.gotoPage(actionType,datatableId);
});

//verify current page number
Then('User verifies page {string} is displayed in [Activity-Table][{string}]', async function ({ context }, pageNo, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.verifyPage(pageNo,datatableId);
});

//select a page
When('User selects page {string} in [Activity-Table][{string}]', async function ({ context }, pageNo, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.selectPage(pageNo,datatableId);
});

//verify page size
Then('User verifies page size {string} is displayed in [Activity-Table][{string}]', async function ({ context }, pageSize, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.verifyPageSize(pageSize,datatableId);
});

//change page size
When('User selects page size {string} in [Activity-Table][{string}]', async function ({ context }, pageSize, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.selectPageSize(pageSize,datatableId);
});

//verify total pages
Then('User verifies total pages as {string} in [Activity-Table][{string}]', async function ({ context }, totalPages, datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.verifyTotalPages(totalPages,datatableId);
});


//verify specific button is displayed at expected cell in respective row as per status
Then('User verifies {string} button is displayed at column {int} for row with {string} state [Activity-Table][{string}]', async function ({ context }, button, cell, status,datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  await newPageConstants.activityDataTable.verifyActionButtonForStatus(datatableId,status,cell,button);
});

//perform action on row 
When('User performs {string} operation on record with {string} state from [Activity-Table][{string}]', async function ({ context }, operation, status,datatableId) {
  let newPage = await dataUtils.getPage(context, 'PEM');
  const newPageConstants = new PageConstants(newPage);
  const actionCellIndex = datatableId === "activity-list" ? 3 : 2;
  await newPageConstants.activityDataTable.performActionForStatus(datatableId,status,actionCellIndex,operation);
});
