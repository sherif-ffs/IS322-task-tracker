import React from 'react';

import '../../styles/TableView/table.css'

const SearchBar = props => {

    const searchTasksByTitle = props.onSubmit;

    return (
        <form className="search-bar filter" onSubmit={e => searchTasksByTitle(e, e.target.value)}>
            <input type="text" placeholder="Search tasks.." name="search" className="search-input"/>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default SearchBar;