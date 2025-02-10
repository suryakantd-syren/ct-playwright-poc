const { expect } = require('@playwright/test');
const { DataTable } = require('./ActivityDataTable');

class Page {
  constructor(parent, pageName) {
    this.pageName = pageName;
    this.parent = parent;
  }

  async _getPage() {
    if (this.pageName !== undefined) {
      return this.parent.locator(`.sfg--page--${this.pageName}`);
    } else {
      return this.parent;
    }
  }

  async verfiyPageTitle(pageTitle) {
    const text = await this._getPage.locator(`.page-header-container .cds--data-table-header__title`).textContent();
    expect(text).toBe(pageTitle);
  }

  async verifyPageAction(actionName, elementStatus) {
    const pageFooter = await this._getPage().locator(`.sfg--page--actions`);
    expect(pageFooter).toBeVisible();
    const actionBtn = await pageFooter.getByRole('button', { name: actionName });
    //checkElementStatus(actionBtn, elementStatus);
  }

  async performPageAction(actionName) {
    const pageFooter = await this._getPage().locator(`.sfg--page--actions`);
    expect(pageFooter).toBeVisible();
    const actionBtn = await pageFooter.getByRole('button', { name: actionName });
    expect(actionBtn).toBeVisible();
    expect(actionBtn).toBeEnabled();
    await actionBtn.click();
  }

  // async getForm(formName) {
  //   return new Form(this.parent, await this._getPage(), formName);
  // }

  async getDataTable(datatableName) {
    return new DataTable(this.parent, await this._getPage(), datatableName);
  }

  // async getConfigurationsTiles(groupName) {
  //   return new ConfigurationTiles(this.parent, await this._getPage(), groupName);
  // }

  // async getFlowIndicatorBox(groupName) {
  //   return new FlowProgressIndicator(this.parent, await this._getPage(), groupName);
  // }
}

const getPage = function (parent, pageName) {
  return new Page(parent, pageName);
};

module.exports = { Page };

export { getPage };
