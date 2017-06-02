import { browser, element, by } from 'protractor';

export class NavigationPage {
  navigateTo(path: string = '/') {
    return browser.get(path);
  }

  navigateToSchedule() {
    return this.clickOnNavButton('nav_schedule');
  }

  navigateToFavorites() {
    return this.clickOnNavButton('nav_favorites');
  }

  navigateToClassSelection() {
    return this.clickOnNavButton('nav_filter');
  }

  navigateToSettings() {
    return this.clickOnNavButton('nav_settings');
  }

  navigateToAbout() {
    return this.clickOnNavButton('nav_about');
  }

  getAppTitle() {
    return element(by.css('md-toolbar-row > span')).getText();
  }

  getFirstCardTitle() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card-title'))).getText();
  }

  getFirstParagraphText() {
    return this.getFirstDisplayedElement(element.all(by.css('p'))).getText();
  }

  clickOnVisibleRaisedButton() {
    return this.getFirstDisplayedElement(element.all(by.css('.mat-raised-button'))).click();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  private clickOnNavButton(buttonName: string) {
    element(by.id('nav_burger-menu')).click();
    return this.getFirstDisplayedElement(element.all(by.id(buttonName))).click();
  }

  private getFirstDisplayedElement(element) {
    return element.filter(e => e.isDisplayed()).first();
  }
}
