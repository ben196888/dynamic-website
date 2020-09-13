import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Redux store provider', () => {
  const target = shallow(<App />);
  target.find('Provider').debug();
  expect(target.find('Provider')).toBeDefined();
});
