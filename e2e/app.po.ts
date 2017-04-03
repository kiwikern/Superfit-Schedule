import { browser, element, by } from 'protractor';

export class SuperfitschedulePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sfs-root h1')).getText();
  }
}
