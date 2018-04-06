import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Ionic Testing PWA', () => {
      page.getPageHomeTitleText()
        .then(title => {
          expect(title).toEqual('Ionic Testing PWA');
        });
    });


  })
});
