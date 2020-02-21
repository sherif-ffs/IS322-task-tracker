import React from 'react';
import '../../styles/GridView/gridView.css'
import '@atlaskit/css-reset'
import initialData from '../../initialData'
import Column from './Column'

class GridView extends React.Component {
  state = initialData;

  render () {
    
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId]
      // console.log('this.state.tasks: ', this.state.tasks[0].id)
      // console.log('this.state.tasks[`task-1`]: ' , this.state.tasks[0].id === 'task-1');

      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId])
      return <Column key={column.id} column={column} tasks={tasks}></Column>
  })
  }
};

export default GridView;
