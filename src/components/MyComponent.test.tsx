import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  test('snapshot', () => {
    const target = render(<MyComponent />);
    expect(target).toMatchSnapshot();
  });
});
