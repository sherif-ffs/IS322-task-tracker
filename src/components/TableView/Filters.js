import React from 'react';

import '../../styles/TableView/filters.css'

class Filters extends React.Component {

  render () {
    return (
        <section className="filters-container">
            <button className="button filter">Reset Filters</button>

             <select class="filter-by-status filter" name="orderBy">
                <option value="DEFAULT" selected="selected">filter by status</option>                
                <option value="all">all</option>
                <option value="done">done</option>
                <option value="todo">todo</option>
                <option value="review">review</option>
                <option value="in-progress">in progress</option>
            </select>

            <select class="filter-by-article filter" name="orderBy">
                <option selected="selected">filter by type</option>   
                <option value="all">all</option>
                <option value="bug">bugs</option>
                <option value="feature">feature</option>
                <option value="fix">fix</option>
            </select>
        </section>
    )
  }
};

export default Filters;
