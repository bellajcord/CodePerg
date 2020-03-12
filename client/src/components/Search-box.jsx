import React from 'react';

export const SearchBox = ({ placeholder,hanldeChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange= {hanldeChange }
        />
);