import { LoginAPP3Page } from './app.po';

describe('login-app3 App', function() {
  let page: LoginAPP3Page;

  beforeEach(() => {
    page = new LoginAPP3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
