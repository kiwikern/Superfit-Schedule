import { browser, by, element, protractor } from 'protractor';

export class ClassSelectionPage {
  navigateTo() {
    return browser.get('/schedule/filter');
  }

  removeAllFilters() {
    return element.all(by.css('mat-expansion-panel')).then((array: any[]) => {
      array.forEach(panel => {
        panel.click();
        element.all(by.css('sfs-select-filter .mat-icon-button:not([disabled])'))
          .filter(e => e.isDisplayed())
          .click();
      });
    });
  }

  addClassFilter() {
    this.openExpansionPanelAtPosition(0);
    this.clickOnDisplayedSelectList(0);
    this.clickOnFirstNOptions(3);
    this.clickOnBackdrop();
  }

  addStudioFilter() {
    this.openExpansionPanelAtPosition(2);
    this.clickOnDisplayedSelectList(1);
    this.clickOnFirstNOptions(3);
    this.clickOnBackdrop();
  }

  private openExpansionPanelAtPosition(n: number) {
    element.all(by.css('mat-expansion-panel'))
      .get(n)
      .click();
  }

  /**
   * Because isDisplayed does not handle expansion panels properly,
   * an index is used.
   * @param n
   */
  private clickOnDisplayedSelectList(n) {
    element.all(by.css('sfs-select-filter mat-select'))
      .filter(e => e.isDisplayed())
      .get(n)
      .click();
  }

  private clickOnFirstNOptions(n: number) {
    element.all(by.css('mat-option'))
      .filter((option, index) => index < n && option.isDisplayed())
      .each(option => option.click());
  }

  private clickOnBackdrop() {
    browser.driver.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

}
