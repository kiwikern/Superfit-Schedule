import { browser, by, element } from 'protractor';

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

  navigateToChanges() {
    return this.clickOnRouterButton('/schedule/changes');
  }

  navigateToAbout() {
    return this.clickOnRouterButton('/about');
  }

  navigateToAccount() {
    return this.clickOnRouterButton('/auth');
  }

  navigateToLoginViaButton() {
    return this.getFirstDisplayedElement(element.all(by.css(`button[routerLink="/auth"]`))).click();
  }

  navigateToRegister() {
    return this.clickOnRouterLink('../registration');
  }

  navigateToResetPassword() {
    return this.clickOnRouterLink('../reset-password');
  }

  navigateToLogin() {
    return this.clickOnRouterLink('../login');
  }

  openReleasenotes() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card-subtitle a'))).click();
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

  getDialogTitle() {
    return this.getFirstDisplayedElement(element.all(by.css('.mat-dialog-title'))).getText();
  }

  clickOnVisibleRaisedButton() {
    return this.getFirstDisplayedElement(element.all(by.css('.mat-raised-button'))).click();
  }

  clickOnSecondToolbarButton(index: number) {
    return element.all(by.css(`sfs-bottom-navigation-button button`)).get(index).click();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  private clickOnRouterButton(path: string) {
    element(by.id('nav_burger-menu')).click();
    return this.getFirstDisplayedElement(element.all(by.css(`sfs-navigation-button button[ng-reflect-router-link="${path}"]`))).click();
  }

  private clickOnRouterLink(path: string) {
    return this.getFirstDisplayedElement(element.all(by.css(`a[routerLink="${path}"]`))).click();
  }

  private getFirstDisplayedElement(elem) {
    return elem.filter(e => e.isDisplayed()).first();
  }

}
