import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
    render(<Button variant="filled" type="button">Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
});
