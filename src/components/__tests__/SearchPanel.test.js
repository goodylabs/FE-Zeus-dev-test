import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import SearchPanel from '../SearchPanel';

afterEach(cleanup);

test('SearchPanel render', () => {
  render(<SearchPanel />);
  const linkElement = screen.getByText(/Weather.I/i);
  expect(linkElement).toBeInTheDocument();
});
