import { render, screen } from '@testing-library/react'
import Header from './Header'

// test should have a header with the text SEARCH TICKER
test('should have a header with the text SEARCH TICKER', () => {
  render(<Header />)
  const headerElement = screen.getByRole('heading', { level: 1 })
  expect(headerElement).toHaveTextContent('SEARCH TICKER')
})
