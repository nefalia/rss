import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const header = screen.getByText(/di rss/i);
  expect(header).toBeInTheDocument();
});
