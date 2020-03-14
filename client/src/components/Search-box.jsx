import React from 'react';

export const SearchBox = ({ placeholder,hanldeChange}) => (
    
    <div className='filter-unit' >
    <label>Filter Results:</label>
    <input
        className='filter-bar'
        type='search'
        placeholder={placeholder}
        onChange= {hanldeChange }
        />
    </div>
        );