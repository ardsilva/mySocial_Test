import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mySocial', () => {
  render(<App />);
  const linkElement = screen.getByText(/mySocial/i);
  expect(linkElement).toBeInTheDocument();
});
