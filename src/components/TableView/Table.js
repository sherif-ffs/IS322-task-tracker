import React from 'react';

import '../../styles/TableView/table.css'
import TableRow from './TableRow'

const Table = props => {

  let {allTasks} = props; 

  let tableRows = allTasks.map((tableRow, i) => {
      return <TableRow
                title={tableRow.title}
                status={tableRow.status}
                type={tableRow.type}
                key={tableRow.i}
                id={tableRow.id}
                />
  })

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th> 
                    <th>Type</th>
                </tr>
            </thead>
            <tbody className="table-body">
               {tableRows}
            </tbody> 
        </table>
    )
};

export default Table;
