
class RolloutWizard {
  constructor(page) {
    this.page = page;

    this.rolloutName = this.page.locator('div.is-visible div.cds--text-input__field-wrapper [id="name"]');
    this.rolloutdes = this.page.locator('div.is-visible div.cds--text-area__wrapper [id="description"]');
    this.rolloutToInternalRadio = this.page.locator('div.is-visible fieldset.cds--radio-button-group--label-right [for="internal_users"] span.cds--radio-button__appearance');
    this.rolloutSaveBtn = this.page.locator('div.is-visible div.cds--btn-set button.cds--btn--primary');
  }

  async rolloutToInternalUsers() {
    await this.rolloutName.fill('Demo RollOut');
    await this.rolloutdes.fill('Demo RollOut Description');
    await this.rolloutToInternalRadio.click();
    await this.rolloutSaveBtn.click();
  }
}

module.exports = { RolloutWizard };
