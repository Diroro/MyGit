import { WebchatPage } from './app.po';

describe('webchat App', () => {
  let page: WebchatPage;

  beforeEach(() => {
    page = new WebchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
