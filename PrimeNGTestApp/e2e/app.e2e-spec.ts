import { PrimeNGTestAppPage } from './app.po';

describe('prime-ngtest-app App', () => {
  let page: PrimeNGTestAppPage;

  beforeEach(() => {
    page = new PrimeNGTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
