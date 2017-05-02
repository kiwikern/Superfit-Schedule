import { SuperfitschedulePage } from './app.po';

describe('superfitschedule App', () => {
  let page: SuperfitschedulePage;

  beforeEach(() => {
    page = new SuperfitschedulePage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('SuperFit Kursplan');
  });
});
