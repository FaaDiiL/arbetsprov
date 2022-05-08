import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('Search ticker', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Search ticker/i);
  expect(linkElement).toBeInTheDocument();
});
