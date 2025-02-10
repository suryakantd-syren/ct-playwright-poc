class ActivityVersionDrawer {
  constructor(page) {
    this.page = page;

    // version View and Edit
    this.versionView = this.page.locator('ul.cds--overflow-menu-options--open .activity-view-overflow-menu');
    this.versionEdit = this.page.locator('ul.cds--overflow-menu-options--open .activity-edit-overflow-menu');

    // Model
    this.modelHeading = this.page.locator('.is-visible .cds--modal-header__heading');
    this.modelClose = this.page.locator('.is-visible .cds--modal-close-button button');
  }

  /*
  // Version Restore
  async versionRestore() {
    await this.page.waitForTimeout(10);
    const drafStatusRow = await this.activityVersionRow('Delete');
    const btn = await drafStatusRow.locator('td').nth(3).locator('.action-item-drawer-restore');
    // Restore Action
    await btn.click();
  }

  // Activity Version View From Ellipse
  async activityVersionView() {
    await this.page.waitForTimeout(10);
    const drafRow = await this.activityVersionRow('Draft');
    const btn = await drafRow.locator('td').nth(4).locator('.cds--overflow-menu__wrapper button');
    await btn.click();
    await this.versionView.click();

    // After Click on View btn
  }

  // Activity Version Edit From Ellipse
  async activityVersionEdit() {
    await this.page.waitForTimeout(10);
    const drafRow = await this.activityVersionRow('Draft');
    const btn = await drafRow.locator('td').nth(4).locator('.cds--overflow-menu__wrapper button');
    await btn.click();
    await this.versionEdit.click();
    // After Click on Edit btn
  }*/
}

module.exports = { ActivityVersionDrawer };
