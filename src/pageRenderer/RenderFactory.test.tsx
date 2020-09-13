import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import factory from './RenderFactory';

describe('RenderFactory', () => {
  test('render string', () => {
    const actual = factory('John Doe', {});
    expect(typeof actual).toBe('string');
    expect(actual).toBe('John Doe');
  });
  test.each([
    ['div'],
    ['a'],
    ['button'],
    ['span'],
    ['h1'],
  ])('render basic html component - %s', (type) => {
    const cmp = factory({ key: `unique-key-${type}`, type }, {});
    if (typeof cmp !== 'string') {
      const actual = renderer.create(cmp).toJSON();
      expect(actual).toMatchSnapshot();
    }
  });
  test('render my component', () => {
    const cmp = factory({ key: 'unique-key-mycomponent', type: 'MyComponent' }, {});
    if (typeof cmp !== 'string') {
      const actual = shallow(cmp);
      expect(actual.find('MyComponent')).toBeDefined();
    }
  });
});
