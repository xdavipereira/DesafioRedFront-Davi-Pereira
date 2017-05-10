import { StylusPage } from './app.po';

describe('stylus App', () => {
  let page: StylusPage;

  beforeEach(() => {
    page = new StylusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
