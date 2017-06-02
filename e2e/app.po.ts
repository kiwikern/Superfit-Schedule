import { browser, element, by } from 'protractor';

export class AppPage {

  setMobileBrowserSize() {
    browser.driver.manage().window().setSize(435, 800);
  }
}
