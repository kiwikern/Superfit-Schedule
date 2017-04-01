import { SuperfitschedulePage } from './app.po';

describe('superfitschedule App', () => {
  let page: SuperfitschedulePage;

  beforeEach(() => {
    page = new SuperfitschedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
