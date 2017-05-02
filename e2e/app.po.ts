import { browser, element, by } from 'protractor';

export class SuperfitschedulePage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('md-toolbar-row > span')).getText();
  }

  getSideNavDiv() {
    return element(by.css('sfs-root md-sidenav-container md-sidenav div'));
  }

  getContent() {
    return element(by.css('sfs-root md-sidenav-container .mat-sidenav-content md-toolbar'));
  }
}
