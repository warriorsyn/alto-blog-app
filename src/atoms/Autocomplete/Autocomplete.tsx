import React, { useState, useEffect } from 'react';
import './autocomplete.scss';

export type Option = {
    label: string;
    value: string;
}

type AutocompleteProps = {
    options: Option[];
    onSelected: (option: Option) => void;
}

export function Autocomplete({ options, onSelected }: AutocompleteProps) {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filtered);

        if (inputValue.length){
            setShowDropdown(filtered.length > 0);
        }
    }, [inputValue, options]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleOptionClick = (option: Option) => {
        onSelected(option);
        setInputValue('');
        setShowDropdown(false);
    }

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for a post"

            />
            {showDropdown && (
                <div className="dropdown">
                    {filteredOptions.map(option => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="dropdown-option"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
