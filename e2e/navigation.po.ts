import { browser, element, by, ElementArrayFinder } from 'protractor';

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

  navigateToAccount() {
    return this.clickOnNavButton('nav_account');
  }

  navigateToRegister() {
    this.clickOnRouterLink('../registration');
  }

  navigateToResetPassword() {
    this.clickOnRouterLink('../reset-password');
  }

  navigateToLogin() {
    this.clickOnRouterLink('../login');
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
    const navButton = this.getFirstDisplayedElement(element.all(by.id(buttonName)));
    browser.actions().mouseMove(navButton).perform();
    return navButton.click();
  }

  private clickOnRouterLink(path: string) {
    return this.getFirstDisplayedElement(element.all(by.css(`a[routerLink="${path}"]`))).click();
  }

  private getFirstDisplayedElement(element) {
    return element.filter(e => e.isDisplayed()).first();
  }

}
