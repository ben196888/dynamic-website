import elementReducer from './elementReducer';
import { SET_ELEMENTS, ElementActionTypes } from './types';

describe('elementReducer', () => {
  it('should return default state', () => {
    const state = elementReducer(undefined, {} as ElementActionTypes);
    expect(state).toStrictEqual({});
  });
  describe('return element attributes after set elements', () => {
    describe('single node', () => {
      test('ignore element state', () => {
        const state = elementReducer({}, {
          type: SET_ELEMENTS,
          payload: ['Hello World'],
        });
        expect(state).toStrictEqual({});
      });
      test('html tag attributes', () => {
        const state = elementReducer({}, {
          type: SET_ELEMENTS,
          payload: [{ type: 'div', key: 'unique-key-0', style: { border: '1px' } }],
        });
        expect(state).toStrictEqual({
          'unique-key-0': {
            type: 'div',
            key: 'unique-key-0',
            style: { border: '1px' },
          },
        });
      });
    });
    describe('multiple nodes', () => {
      test('single layer', () => {
        const state = elementReducer({}, {
          type: SET_ELEMENTS,
          payload: [
            {
              type: 'div',
              key: 'unique-key-0',
              style: { border: '1px' },
            },
            'Hello World',
            'John Doe',
          ],
        });
        expect(state).toStrictEqual({
          'unique-key-0': {
            type: 'div',
            key: 'unique-key-0',
            style: { border: '1px' },
          },
        });
      });
      test('multiple layers', () => {
        const state = elementReducer({}, {
          type: SET_ELEMENTS,
          payload: [
            {
              type: 'div',
              key: 'unique-key-0',
              style: { border: '1px' },
              children: [{ type: 'a', key: 'unique-key-2', children: ['Link'] }],
            },
            'Hello World',
            'John Doe',
            { type: 'button', key: 'unique-key-1', children: ['Click me'] },
          ],
        });
        expect(state).toStrictEqual({
          'unique-key-0': {
            type: 'div',
            key: 'unique-key-0',
            style: { border: '1px' },
          },
          'unique-key-1': { type: 'button', key: 'unique-key-1' },
          'unique-key-2': { type: 'a', key: 'unique-key-2' },
        });
      });
    });
  });
});
