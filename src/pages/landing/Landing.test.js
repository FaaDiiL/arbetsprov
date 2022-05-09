import { render, screen } from '@testing-library/react';
import Header from '../../components/header/Header';

test('Search ticker', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Search ticker/i);
  expect(linkElement).toBeInTheDocument();
});
