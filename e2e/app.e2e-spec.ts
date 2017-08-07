import { ScotchMusicPlayerPage } from './app.po';

describe('scotch-music-player App', () => {
  let page: ScotchMusicPlayerPage;

  beforeEach(() => {
    page = new ScotchMusicPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
