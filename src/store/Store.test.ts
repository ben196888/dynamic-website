import Store from './Store';

describe('Store', () => {
  describe('getState', () => {
    it('should contains tree state', () => {
      expect(Store.getState()).toHaveProperty('tree', []);
    });
    it('should contains elements state', () => {
      expect(Store.getState()).toHaveProperty('elements', {});
    });
  });
});
