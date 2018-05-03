import {browser, by, element} from 'protractor';

export class NavigationPage {
  async navigateTo(path: string = '/') {
    return await browser.get(path);
  }

  async navigateToSchedule() {
    return await this.clickOnRouterButton(1);
  }

  async navigateToFavorites() {
    return await this.clickOnRouterButton(2);
  }

  async navigateToClassSelection() {
    return await this.clickOnRouterButton(3);
  }

  async navigateToSettings() {
    return await this.clickOnRouterButton(6);
  }

  async navigateToChanges() {
    return await this.clickOnRouterButton(4);
  }

  async navigateToAbout() {
    return await this.clickOnRouterButton(8);
  }

  async navigateToAccount() {
    return await this.clickOnRouterButton(5);
  }

  async navigateToLoginViaButton() {
    return (await this.getFirstDisplayedElement(element.all(by.css(`button[routerLink="/auth"]`)))).click();
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

  async openReleasenotes() {
    const versionText = await this.getFirstDisplayedElement(element.all(by.css('mat-card-subtitle a')));
    return versionText.click();
  }

  async getAppTitle() {
    return (await element(by.css('mat-toolbar > span'))).getText();
  }

  async getFirstCardTitle() {
    return (await this.getFirstDisplayedElement(element.all(by.css('mat-card-title')))).getText();
  }

  async getFirstParagraphText() {
    const paragraph = await this.getFirstDisplayedElement(element.all(by.css('p')));
    return paragraph.getText();
  }

  async getDialogTitle() {
    const dialogTitle = await this.getFirstDisplayedElement(element.all(by.css('.mat-dialog-title')));
    return dialogTitle.getText();
  }

  async clickOnVisibleRaisedButton() {
    const button = await this.getFirstDisplayedElement(element.all(by.css('.mat-raised-button')));
    return button.click();
  }

  async clickOnBottomNavigationButton(index: number) {
    const buttons = await element.all(by.css(`sfs-bottom-navigation-button button`));
    return buttons[index].click();
  }

  async getUrl() {
    return await browser.getCurrentUrl();
  }

  private async clickOnRouterButton(index: number) {
    const burgerMenu = await element(by.id('nav_burger-menu'));
    await burgerMenu.click();
    const routerButton = await element(by.css(`sfs-navigation-button.fullwidth:nth-child(${index})`));
    return routerButton.click();
  }

  private async clickOnRouterLink(path: string) {
    const link = await this.getFirstDisplayedElement(element.all(by.css(`a[routerLink="${path}"]`)));
    return link.click();
  }

  private async getFirstDisplayedElement(elem) {
    return (await elem.filter(async e => await e.isDisplayed()))[0];
  }

}
