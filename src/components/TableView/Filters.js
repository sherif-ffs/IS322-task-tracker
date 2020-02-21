import React from 'react';

import Button from '@material-ui/core/Button';
import Select from './Select'
import SearchBar from './SearchBar'

import '../../styles/TableView/filters.css'

class Filters extends React.Component {

  render () {
    const {onTypeChange, resetTable, searchTasksByTitle} = this.props;

    return (
        <section className="filters-container">
          <Button className="button filter" onClick={resetTable} variant="contained" color="primary">Reset Table</Button>
          <Select className="filter" onChange={onTypeChange}></Select>
          <SearchBar className="filter" onSubmit={searchTasksByTitle}></SearchBar>
        </section>
    )
  }
};

export default Filters;
