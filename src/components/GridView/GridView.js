import React from 'react';
import '../../styles/GridView/gridView.css'
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd'
import initialData from '../../initialData'
import Column from './Column'

class GridView extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.transition =` background-color 0.2s ease`;
  }

  onDragUpdate = update => {
    const destination = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length 
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`

  }
  onDragEnd = result => {
      document.body.style.color = 'inherit';
      document.body.style.backgroundColor = 'inherit';
      const { destination, source, draggableId } = result;

      if (!destination) {
        return
      }
      if (
        destination.id === source.id &&
        destination.index === source.index
      ) {
        return
      }

      const column = this.state.columns[source.droppableId]
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...column,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
  }

  render () {
    
    return (
      <DragDropContext 
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
      >
        {this.state.columnOrder.map((columnId) => {
        const column = this.state.columns[columnId]
        const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId])
        return <Column key={column.id} column={column} tasks={tasks}></Column>
    })}
    </DragDropContext>
    )
      
  }
};

export default GridView;
