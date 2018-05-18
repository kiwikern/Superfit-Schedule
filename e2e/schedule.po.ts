import {browser, by, element} from 'protractor';
import * as moment from 'moment-mini';
import {MappingService} from '../src/app/workout/mapping.service';

export class SchedulePage {
  async navigateTo() {
    return await browser.get('/schedule');
  }

  async getFirstClassTitle() {
    return (await this.getFirstDisplayedElement(element.all(by.css('.class-headline > span')))).getText();
  }

  async getFirstClassStudio() {
    return (await this.getFirstDisplayedElement(element.all(by.css('mat-card-subtitle > span')))).getText();
  }

  async getFirstClassDay() {
    return (await this.getFirstDisplayedElement(element.all(by.css('.mat-card >:last-child >:first-child >:last-child > span')))).getText();
  }

  async getFirstClassTime() {
    return (await this.getFirstDisplayedElement(element.all(by.css('sfs-time-period')))).getText();
  }

  async getFirstShownDay() {
    return (await this.getFirstDisplayedElement(element.all(by.css('h2')))).getText();
  }
  getToday() {
    const service = new MappingService();
    const day = (moment().day() + 6) % 7;
    return service.getDayName(day);
  }

  async markFirstClassAsFavorite() {
    return (await this.getFirstDisplayedElement(element.all(by.css('mat-card button.mat-icon-button')))).click();
  }
  private async getFirstDisplayedElement(elem) {
    return elem.filter(e => e.isDisplayed()).first();
  }

}
