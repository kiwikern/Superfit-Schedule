import {browser, by, element, protractor} from 'protractor';

export class ClassSelectionPage {
  async navigateTo() {
    return await browser.get('/schedule/filter');
  }

  async removeAllFilters() {
    return await element.all(by.css('mat-expansion-panel')).then((array: any[]) => {
      array.forEach(panel => {
        panel.click();
        element.all(by.css('sfs-select-filter .mat-icon-button:not([disabled])'))
          .filter(e => e.isDisplayed())
          .click();
      });
    });
  }

  async addClassFilter() {
    await this.openExpansionPanelAtPosition(0);
    await this.clickOnDisplayedSelectList(0);
    await this.clickOnFirstNOptions(3);
    await this.clickOnBackdrop();
  }

  async addStudioFilter() {
    await this.openExpansionPanelAtPosition(2);
    await this.clickOnDisplayedSelectList(1);
    await this.clickOnFirstNOptions(3);
    await this.clickOnBackdrop();
  }

  private async openExpansionPanelAtPosition(n: number) {
    await element.all(by.css('mat-expansion-panel'))
      .get(n)
      .click();
  }

  /**
   * Because isDisplayed does not handle expansion panels properly,
   * an index is used.
   * @param n
   */
  private async clickOnDisplayedSelectList(n) {
    return await element.all(by.css('sfs-select-filter mat-select'))
      .filter(e => e.isDisplayed())
      .get(n)
      .click();
  }

  private async clickOnFirstNOptions(n: number) {
    await element.all(by.css('mat-option'))
      .filter((option, index) => index < n && option.isDisplayed())
      .each(option => option.click());
  }

  private async clickOnBackdrop() {
    await browser.driver.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

}
