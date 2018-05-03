import {ClassSelectionPage} from './class-selection.po';
import {SchedulePage} from './schedule.po';
import {AppPage} from './app.po';
import {NavigationPage} from './navigation.po';

describe('Schedule', () => {
  let classSelectionPage: ClassSelectionPage;
  let schedulePage: SchedulePage;
  let appPage: AppPage;
  let navigationPage: NavigationPage;

  beforeAll(async () => {
    classSelectionPage = new ClassSelectionPage();
    schedulePage = new SchedulePage();
    appPage = new AppPage();
    navigationPage = new NavigationPage();

    await appPage.setMobileBrowserSize();
    await classSelectionPage.navigateTo();
    await classSelectionPage.addClassFilter();
    await classSelectionPage.addStudioFilter();
  });

  beforeEach(async () => {
    await schedulePage.navigateTo();
  });

  afterAll(async() => {
    await classSelectionPage.navigateTo();
    await classSelectionPage.removeAllFilters();
  });

  it('should show a class with title, studio and time', async () => {
    expect(await schedulePage.getFirstClassTitle()).not.toBeNull();
    expect(await schedulePage.getFirstClassStudio()).not.toBeNull();
    expect(await schedulePage.getFirstClassDay()).toBe(schedulePage.getToday() + ', ');
    expect(await schedulePage.getFirstClassTime()).toContain(' - ');
  });

  it('should show today as first day', async () => {
    expect(await schedulePage.getFirstShownDay()).toBe(schedulePage.getToday());
  });

  it('should add a favorite and show it in favorites list', async () => {
    const firstTitle = await schedulePage.getFirstClassTitle();
    await schedulePage.markFirstClassAsFavorite();
    await navigationPage.navigateToFavorites();
    expect(await schedulePage.getFirstClassTitle()).toBe(firstTitle);
  });

});
