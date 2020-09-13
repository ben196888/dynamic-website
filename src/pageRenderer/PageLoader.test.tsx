import React from 'react';
import { render, act } from '../testUtils';
import PageLoader from './PageLoader';

describe('<PageLoader />', () => {
  test('should dispatch set element action', async () => {
    const { container } = render(<PageLoader />, {
      initialState: { tree: [], elements: {} },
    });
    await act(async () => {
      render(<PageLoader />);
    });
    expect(container).toMatchSnapshot();
  });
});
