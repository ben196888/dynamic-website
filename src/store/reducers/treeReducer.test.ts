import treeReducer from './treeReducer';
import { SET_ELEMENTS, ElementActionTypes } from './types';

describe('treeReducer', () => {
  it('should return default state', () => {
    const state = treeReducer(undefined, {} as ElementActionTypes);
    expect(state).toStrictEqual([]);
  });
  describe('return tree structure after set elements', () => {
    describe('single node', () => {
      test('string', () => {
        const state = treeReducer([], {
          type: SET_ELEMENTS,
          payload: ['Hello World'],
        });
        expect(state).toStrictEqual(['Hello World']);
      });
      test('html tag', () => {
        const state = treeReducer([], {
          type: SET_ELEMENTS,
          payload: [{ type: 'div', key: 'unique-key-0', style: { border: '1px' } }],
        });
        expect(state).toStrictEqual([
          {
            type: 'div',
            key: 'unique-key-0',
          },
        ]);
      });
    });
    describe('multiple nodes', () => {
      test('single layer', () => {
        const state = treeReducer([], {
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
        expect(state).toStrictEqual([
          {
            type: 'div',
            key: 'unique-key-0',
          },
          'Hello World',
          'John Doe',
        ]);
      });
      test('multiple layers', () => {
        const state = treeReducer([], {
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
        expect(state).toStrictEqual([
          {
            type: 'div',
            key: 'unique-key-0',
            children: [{ type: 'a', key: 'unique-key-2', children: ['Link'] }],
          },
          'Hello World',
          'John Doe',
          { type: 'button', key: 'unique-key-1', children: ['Click me'] },
        ]);
      });
    });
  });
});
