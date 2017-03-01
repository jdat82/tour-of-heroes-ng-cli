import { TourOfHeroesNgCliPage } from './app.po';

describe('tour-of-heroes-ng-cli App', () => {
  let page: TourOfHeroesNgCliPage;

  beforeEach(() => {
    page = new TourOfHeroesNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
