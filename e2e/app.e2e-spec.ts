import { A170804dPage } from './app.po';

describe('a170804d App', function() {
  let page: A170804dPage;

  beforeEach(() => {
    page = new A170804dPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
