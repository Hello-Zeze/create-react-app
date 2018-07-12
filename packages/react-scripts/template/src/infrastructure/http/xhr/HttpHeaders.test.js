import HttpHeaders from './HttpHeaders';
describe('HttpHeaders', () => {
  describe('When instantiating', () => {
    it('sets internal objects', () => {
      const appStartupActionCreator = new AppStartupActionCreator();
      expect(appStartupActionCreator.appDataRequests).toEqual([]);
    });
  });
});
