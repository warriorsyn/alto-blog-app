import { render, screen, fireEvent } from '@testing-library/react';
import { Autocomplete, Option } from './Autocomplete';

const options: Option[] = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
];

describe('Autocomplete component', () => {
    test('renders the input field', () => {
        render(<Autocomplete options={options} onSelected={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Search for a post');
        expect(inputElement).toBeInTheDocument();
    });

    test('shows the dropdown with options when typing', () => {
        render(<Autocomplete options={options} onSelected={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Search for a post');
        fireEvent.change(inputElement, { target: { value: 'Option' } });
        const option1Element = screen.getByText('Option 1');
        const option2Element = screen.getByText('Option 2');
        const option3Element = screen.getByText('Option 3');
        expect(option1Element).toBeInTheDocument();
        expect(option2Element).toBeInTheDocument();
        expect(option3Element).toBeInTheDocument();
    });
});
