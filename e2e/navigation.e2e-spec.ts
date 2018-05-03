import {NavigationPage} from './navigation.po';
import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('Navigation', () => {
  let page: NavigationPage;
  let appPage: AppPage;

  beforeAll(async () => {
    page = new NavigationPage();
    appPage = new AppPage();
    await appPage.setMobileBrowserSize();
  });

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('should display app title', async () => {
    expect(await page.getAppTitle()).toEqual('SuperFit Kursplan');
  });

  it('should navigate to schedule and show button to class selection', async () => {
    await page.navigateToSchedule();

    await page.clickOnVisibleRaisedButton();
    expect(await page.getUrl()).toContain('filter');
  });

  it('should navigate to favorites and show title', async () => {
    await page.navigateToFavorites();

    await page.clickOnVisibleRaisedButton();
    expect(await page.getUrl()).toContain('schedule');
  });

  it('should navigate to class selection and show title', async () => {
    await page.navigateToClassSelection();
    expect(await page.getFirstCardTitle()).toEqual('Kurswahl');
  });

  it('should navigate to changes and show title', async () => {
    await page.navigateToChanges();
    expect(await page.getFirstCardTitle()).toEqual('Änderungen des Kursplans');
  });

  it('should navigate to settings and show title', async () => {
    await page.navigateToSettings();
    expect(await page.getFirstCardTitle()).toEqual('Optionen');
  });

  it('should navigate to about and show title', async () => {
    await page.navigateToAbout();
    expect(await page.getFirstCardTitle()).toEqual('Über die App');
  });

  it('should navigate to account, redirect to login and show title', async () => {
    await browser.get('/auth');
    expect(await page.getFirstCardTitle()).toEqual('Registrieren');
  });

  it('should navigate to register and show title', async () => {
    await page.navigateToLoginViaButton();
    await page.navigateToLogin();
    expect(await page.getFirstCardTitle()).toEqual('Login');
    await page.navigateToRegister();
    expect(await page.getFirstCardTitle()).toEqual('Registrieren');
  });

  it('should navigate to reset password and show title', async () => {
    await page.navigateToLoginViaButton();
    await page.navigateToLogin();
    await page.navigateToResetPassword();
    await expect(page.getFirstCardTitle()).toEqual('Passwort zurücksetzen');
    await page.navigateToLogin();
    await expect(page.getFirstCardTitle()).toEqual('Login');
  });

  it('should navigate to about and show releasenotes', async () => {
    await page.navigateToAbout();
    await page.openReleasenotes();
    expect(await page.getFirstCardTitle()).toEqual('Über die App');
  });

  it('should navigate to all links in the schedule\'s second toolbar', async () => {
    await page.clickOnBottomNavigationButton(1);
    expect(await page.getFirstParagraphText()).toContain('Favoriten');
    await page.clickOnBottomNavigationButton(2);
    expect(await page.getFirstCardTitle()).toEqual('Kurswahl');
    await page.clickOnBottomNavigationButton(3);
    expect(await page.getFirstCardTitle()).toEqual('Änderungen des Kursplans');
    await page.clickOnBottomNavigationButton(4);
    expect(await page.getFirstCardTitle()).toEqual('Optionen');
    await page.clickOnBottomNavigationButton(0);
    expect(await page.getFirstParagraphText()).toContain('Lieblingskurse');
  });

});
