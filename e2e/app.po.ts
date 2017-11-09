/**
 * For e2e tests to work with --no-serve
 * https://stackoverflow.com/a/46585614/4694994
 */
import 'zone.js';
import 'reflect-metadata';

import { browser } from 'protractor';

export class AppPage {

  setMobileBrowserSize() {
    browser.driver.manage().window().setSize(435, 800);
  }
}
