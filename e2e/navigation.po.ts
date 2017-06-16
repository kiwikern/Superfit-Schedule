import { browser, element, by } from 'protractor';

export class NavigationPage {
  navigateTo(path: string = '/') {
    return browser.get(path);
  }

  navigateToSchedule() {
    return this.clickOnRouterButton('/schedule');
  }

  navigateToFavorites() {
    return this.clickOnRouterButton('/schedule/favorites');
  }

  navigateToClassSelection() {
    return this.clickOnRouterButton('/schedule/filter');
  }

  navigateToSettings() {
    return this.clickOnRouterButton('/schedule/settings');
  }

  navigateToAbout() {
    return this.clickOnRouterButton('/about');
  }

  navigateToAccount() {
    return this.clickOnRouterButton('/auth');
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

  private clickOnRouterButton(path: string) {
    element(by.id('nav_burger-menu')).click();
    return this.getFirstDisplayedElement(element.all(by.css(`button[routerLink="${path}"]`))).click();
  }

  private clickOnRouterLink(path: string) {
    return this.getFirstDisplayedElement(element.all(by.css(`a[routerLink="${path}"]`))).click();
  }

  private getFirstDisplayedElement(element) {
    return element.filter(e => e.isDisplayed()).first();
  }

}
