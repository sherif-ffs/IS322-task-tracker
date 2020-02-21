import React from 'react';

import '../../styles/TableView/table.css'

const Select = props => {

    const onTypeChange = props.onChange;

    return (
        <select 
            className="filter-by-type filter" 
            name="orderBy"
            placeholder="test"
            onChange={e => onTypeChange(e.target.value)}
            >
            <option defaultValue="defaultValue">filter by type</option>   
            <option value="all">all</option>
            <option value="bug">bug</option>
            <option value="feature">feature</option>
            <option value="task">task</option>
        </select>
    )
}

export default Select;