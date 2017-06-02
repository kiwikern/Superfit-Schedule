import { NavigationPage } from './navigation.po';
import { AppPage } from './app.po';

describe('Navigation', () => {
  let page: NavigationPage;
  let appPage: AppPage;

  beforeAll(() => {
    page = new NavigationPage();
    appPage = new AppPage();
    appPage.setMobileBrowserSize();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('SuperFit Kursplan');
  });

  it('should navigate to schedule and show button to class selection', () => {
    page.navigateToSchedule();
    const paragraph = page.getFirstParagraphText();
    expect(paragraph).toContain('Lieblingskurse');

    page.clickOnVisibleRaisedButton();
    expect(page.getUrl()).toContain('filter');
  });

  it('should navigate to favorites and show title', () => {
    page.navigateToFavorites();
    const paragraph = page.getFirstParagraphText();
    expect(paragraph).toContain('Favoriten');

    page.clickOnVisibleRaisedButton();
    expect(page.getUrl()).toContain('schedule');
  });

  it('should navigate to class selection and show title', () => {
    page.navigateToClassSelection();
    expect(page.getFirstCardTitle()).toEqual('Kurswahl');
  });

  it('should navigate to settings and show title', () => {
    page.navigateToSettings();
    expect(page.getFirstCardTitle()).toEqual('Einstellungen');
  });

  it('should navigate to about and show title', () => {
    page.navigateToAbout();
    expect(page.getFirstCardTitle()).toEqual('Über die App');
  });

});
