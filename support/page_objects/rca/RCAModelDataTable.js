import { expect } from '@playwright/test';

class RCAModelDataTable {
  /**
    * @param {import('@playwright/test').Page} page
    */
  constructor(page) {
    this.page = page;
    this.dataTable = (tableName) => this.page.locator(`.cds--data-table--${tableName}`);
  }

  /**
    * @param {string} actionType
    * @param {string} tableName
    */
  async gotoPage(actionType, tableName) {
    const paginationAction = await this.page.locator(
      `.cds--pagination--${tableName} .cds--pagination__right .cds--pagination__control-buttons button.cds--pagination__button--${actionType}`
    );
    await paginationAction.click();
  }

   /**
    * @param {number} pageNo
    * @param {string} tableName
    */
  async verifyPage(pageNo, tableName) {
    const pageNoElement = await this.page.locator(`.cds--pagination--${tableName} .cds--select__page-number .cds--select-input`);
    await expect(pageNoElement).toHaveValue(pageNo);
  }

   /**
    * @param {number} pageNo
    * @param {string} tableName
    */
  async selectPage(pageNo, tableName) {
    const pageNoElement = await this.page.locator(`.cds--pagination--${tableName} .cds--select__page-number .cds--select-input`);
    await pageNoElement.selectOption(pageNo);
  }

   /**
    * @param {number} pageSize
    * @param {string} tableName
    */
  async verifyPageSize(pageSize, tableName) {
    const pageSizeElement = await this.page.locator(`.cds--pagination--${tableName} .cds--select__item-count .cds--select-input`);
    await expect(pageSizeElement).toHaveValue(pageSize);
  }

   /**
    * @param {number} pageSize
    * @param {string} tableName
    */
  async selectPageSize(pageSize, tableName) {
    const pageSizeElement = await this.page.locator(`.cds--pagination--${tableName} .cds--select__item-count .cds--select-input`);
    await pageSizeElement.selectOption(pageSize);
  }

   /**
    * @param {number} totalPages
    * @param {string} tableName
    */
  async verifyTotalPages(totalPages, tableName) {
    const totalPagesElement = await this.page.locator(`.cds--pagination--${tableName} .cds--pagination__right .cds--pagination__text`);
    const pageText = await totalPagesElement.textContent();
    if (totalPages == 1) {
      await expect(pageText).toBe(`of ${totalPages} page`);
    } else {
      await expect(pageText).toBe(`of ${totalPages} pages`);
    }
  }

  // Find Row By Current Status
   /**
    * @param {string} tableName
    * @param {string} currentStatus
    */
  async getRowWithStatus(tableName, currentStatus) {
    const table = await this.dataTable(tableName);
    const row = await table.locator('tr');
    const countRow = await row.count();
    for (let i = 1; i < countRow; i++) {
      const cells = await row.nth(i).locator('td').nth(2).locator('span').innerText();
      if (cells === currentStatus) {
        return row.nth(i);
      }
    }
  }

  /**
    * @param {string} tableName
    * @param {string} status
    * @param {number} cell
    * @param {string} button
    */
  async verifyActionButtonForStatus(tableName, status, cell, button) {
    const row = await this.getRowWithStatus(tableName, status);
    const btn = await row.locator('td').nth(Number(cell)).locator(`.action-item-drawer-${button}`);
    expect(btn).toBeVisible();
    expect(btn).toBeEnabled();
  }

  /**
    * @param {string} tableName
    * @param {string} status
    * @param {number} cell
    * @param {string} operation
    */
  async performActionForStatus(tableName, status, cell, operation) {
    const row = await this.getRowWithStatus(tableName, status, operation);
    const btn = await row.locator('td').nth(Number(cell)).locator(`.action-item-drawer-${operation}`);
    await btn.click();
  }
}

module.exports = { RCAModelDataTable };
