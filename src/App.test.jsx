import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { CATEGORIES } from './fixtures';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      categories: CATEGORIES,
    })
  );

  it('render', () => {
    render(<App />);
  });
});
