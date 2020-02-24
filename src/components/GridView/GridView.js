import React from 'react';

import '../../styles/GridView/gridView.css'
import '@atlaskit/css-reset'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import initialData from '../../initialData'
import Column from './Column'
import Form from '../GridView/Form'

const Container = styled.div`
  display: flex;
  margin-top: 5vh;
  flex-direction: row;
//   border: 1px solid red;
  // height: 100vw;
  // width: min-content;
`

class GridView extends React.Component {
     state = this.props.state;

//   onDragStart = () => {
//     // document.body.style.color = 'black';
//     // document.body.style.fontWeight = 'bold';
//     // document.body.style.transition = `backgroundColor 0.2s ease`;
//   }

onDragUpdate = update => {
    const {destination} = update;
    const opacity = destination
        ? destination.index / Object.keys(this.state.tasks).length
        : 1;
    console.log('opacity: ', opacity)
    document.body.style.backgroundColor = `rgba(152,193,217, ${opacity})`;
}

onDragEnd = (result) => {
    document.body.style.color = 'inherit';
    document.body.style.fontWeight = 'inherit';
    document.body.style.backgroundColor = `inherit`;

    const {destination, source, draggableId, type} = result;

    if (!destination) {
        return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return
    }

    if (type === 'column') {
        const newColumnOrder = Array.from(this.state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        const newState = {
            ...this.state,
            columnOrder: newColumnOrder,
        };
        // console.log('newState: ', newState)
        this.setState(newState);
        return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...start,
            taskIds: newTaskIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            }
        }
        
        this.setState(newState)
        return
    } 

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds
    };

    const newState = {
        ...this.state,
        columns: {
            ...this.state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    }
    this.setState(newState);
    return
}
  render () {
    return (
      <React.Fragment>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragUpdate={this.onDragUpdate}
          onDragStart={this.onDragStart}
          >
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
              {provided => (
                  <Container 
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                  >
                      {this.state.columnOrder.map((columnId, index) => {
                    //   console.log('columnId: ',columnId)
                      const column = this.state.columns[columnId];
                    //   console.log('column: ',column)
                    //   console.log('this.state: ',this.state)
                      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                      return <Column 
                          key={column.id} 
                          column={column} 
                          tasks={tasks} 
                          index={index} 
                          /> 
                      })}
                      {provided.placeholder}
                  <Form></Form>
                  </Container>
              )
              }
          </Droppable>
        </DragDropContext>
        </React.Fragment>
    )
      
  }
};

export default GridView;
