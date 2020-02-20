import React from 'react';

import '../../styles/TableView/table.css'

const Table = props => {

  let {allTasks} = props; 

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th> 
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                </tr>
            </tbody> 
      </table>
    )
};

export default Table;
