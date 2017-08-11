import { browser, element, by } from 'protractor';
import * as moment from 'moment-mini';
import { MappingService } from '../src/app/workout/mapping.service';

export class SchedulePage {
  navigateTo() {
    return browser.get('/schedule');
  }

  getFirstClassTitle() {
    return this.getFirstDisplayedElement(element.all(by.css('.class-headline > span'))).getText();
  }

  getFirstClassStudio() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card-subtitle > span'))).getText();
  }

  getFirstClassDay() {
    return this.getFirstDisplayedElement(element.all(by.css('.mat-card >:last-child >:first-child >:last-child > span'))).getText();
  }

  getFirstClassTime() {
    return this.getFirstDisplayedElement(element.all(by.css('sfs-time-period'))).getText();
  }

  getFirstShownDay() {
    return this.getFirstDisplayedElement(element.all(by.css('h2'))).getText();
  }
  getToday() {
    const service = new MappingService();
    const day = (moment().day() + 6) % 7;
    return service.getDayName(day);
  }

  markFirstClassAsFavorite() {
    return this.getFirstDisplayedElement(element.all(by.css('md-card button.mat-icon-button'))).click();
  }
  private getFirstDisplayedElement(element) {
    return element.filter(e => e.isDisplayed()).first();
  }

}
