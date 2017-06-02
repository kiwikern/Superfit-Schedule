import { ClassSelectionPage } from './class-selection.po';
import { SchedulePage } from './schedule.po';
import { AppPage } from './app.po';

describe('Schedule', () => {
  let classSelectionPage: ClassSelectionPage;
  let schedulePage: SchedulePage;
  let appPage: AppPage;

  beforeAll(() => {
    classSelectionPage = new ClassSelectionPage();
    schedulePage = new SchedulePage();
    appPage = new AppPage();

    appPage.setMobileBrowserSize();
    classSelectionPage.navigateTo();
    classSelectionPage.addClassFilter();
    classSelectionPage.addStudioFilter();
  });

  beforeEach(() => {
    schedulePage.navigateTo();
  });

  afterAll(() => {
    classSelectionPage.navigateTo();
    classSelectionPage.removeAllFilter();
  });

  it('should show a class with title, studio and time', () => {
    expect(schedulePage.getFirstClassTitle()).not.toBeNull();
    expect(schedulePage.getFirstClassStudio()).not.toBeNull();
    expect(schedulePage.getFirstClassDay()).toBe(schedulePage.getToday() + ', ');
    expect(schedulePage.getFirstClassTime()).toContain(' - ');
  });

  it('should show today as first day', () => {
    expect(schedulePage.getFirstShownDay()).toBe(schedulePage.getToday());
  });

});
