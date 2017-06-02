import { browser, element, by } from 'protractor';
import * as moment from 'moment';

export class SchedulePage {
  navigateTo() {
    return browser.get('/#/schedule');
  }

  getFirstClassTitle() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card-title'))).getText();
  }

  getFirstClassStudio() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card-title'))).getText();
  }

  getFirstClassDay() {
    return this.getFirstDisplayedElement(element.all(by.css('.mat-card >:last-child > span'))).getText();
  }

  getFirstClassTime() {
    return this.getFirstDisplayedElement(element.all(by.css('sfs-time-period'))).getText();
  }

  getFirstShownDay() {
    return this.getFirstDisplayedElement(element.all(by.css('h2'))).getText();
  }

  getToday() {
    moment.locale('de');
    return moment().format('dddd');
  }

  private getFirstDisplayedElement(element) {
    return element.filter(e => e.isDisplayed()).first();
  }

}
