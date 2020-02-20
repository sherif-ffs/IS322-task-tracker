import React from 'react';

import '../../styles/TableView/tableView.css'
import Filters from './Filters'
import Table from './Table'

const TableView = props => {

    const {allTasks} = props;

    return (
      <section className="table-container">
        <Filters></Filters>
        <Table allTasks={allTasks}></Table>
      </section>
    )
};

export default TableView;
