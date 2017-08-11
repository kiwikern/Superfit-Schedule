import { NavigationPage } from './navigation.po';
import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Navigation', () => {
  let page: NavigationPage;
  let appPage: AppPage;

  beforeAll(() => {
    page = new NavigationPage();
    appPage = new AppPage();
    appPage.setMobileBrowserSize();
  });

  beforeEach(() => {
    page.navigateTo();
  });

  it('should display app title', () => {
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

  it('should navigate to changes and show title', () => {
    page.navigateToChanges();
    expect(page.getFirstCardTitle()).toEqual('Änderungen des Kursplans');
  });

  it('should navigate to settings and show title', () => {
    page.navigateToSettings();
    expect(page.getFirstCardTitle()).toEqual('Einstellungen');
  });

  it('should navigate to about and show title', () => {
    page.navigateToAbout();
    expect(page.getFirstCardTitle()).toEqual('Über die App');
  });

  it('should navigate to account, redirect to login and show title', () => {
    browser.get('/auth');
    expect(page.getFirstCardTitle()).toEqual('Registrieren');
  });

  it('should navigate to register and show title', () => {
    page.navigateToLoginViaButton();
    page.navigateToRegister();
    expect(page.getFirstCardTitle()).toEqual('Registrieren');
    page.navigateToLogin();
    expect(page.getFirstCardTitle()).toEqual('Login');
  });

  it('should navigate to reset password and show title', () => {
    page.navigateToLoginViaButton();
    page.navigateToResetPassword();
    expect(page.getFirstCardTitle()).toEqual('Passwort zurücksetzen');
    page.navigateToLogin();
    expect(page.getFirstCardTitle()).toEqual('Login');
  });

  it('should navigate to about and show releasenotes', () => {
    page.navigateToAbout();
    page.openReleasenotes();
    expect(page.getFirstCardTitle()).toEqual('Über die App');
  });

  it('should navigate to all links in the schedule\'s second toolbar', () => {
    page.navigateToSchedule();
    page.clickOnSecondToolbarButton('/favorites');
    expect(page.getFirstParagraphText()).toContain('Favoriten');
    page.clickOnSecondToolbarButton('/filter');
    expect(page.getFirstCardTitle()).toEqual('Kurswahl');
    page.clickOnSecondToolbarButton('/settings');
    expect(page.getFirstCardTitle()).toEqual('Einstellungen');
    page.clickOnSecondToolbarButton('/');
    const paragraph = page.getFirstParagraphText();
    expect(paragraph).toContain('Lieblingskurse');
  });

});
