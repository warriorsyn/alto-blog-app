import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Search for a post');
  expect(inputElement).toBeInTheDocument();
});
