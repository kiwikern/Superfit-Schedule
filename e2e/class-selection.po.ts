import { browser, by, element } from 'protractor';

export class ClassSelectionPage {
  navigateTo() {
    return browser.get('/schedule/filter');
  }

  removeAllFilter() {
    return element.all(by.css('sfs-select-filter .mat-icon-button:not([disabled])')).click();
  }

  addClassFilter() {
    element(by.css('sfs-select-filter[title=Kurse] mat-select')).click();
    this.clickOnFirstNOptions(3);
    browser.refresh();
    // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

  addStudioFilter() {
    element(by.css('sfs-select-filter[title=Studios] mat-select')).click();
    this.clickOnFirstNOptions(3);
    browser.refresh();
    // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

  private clickOnFirstNOptions(n: number) {
    element.all(by.css('mat-option'))
      .filter((option, index) => option.isDisplayed() && index < n)
      .each(option => option.click());
  }

  // private clickOnFirstNOptions(n: number) {
  //   Array.from(Array(n), () => {
  //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
  //     browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  //   });
  // }

}
