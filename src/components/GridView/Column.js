import React from 'react'

import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    width: 250px;
    // z-index: 1!important;
    height: min-content;
    background-color: #ebecf0;
    display: flex;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
    flex-direction: column;
`
const Title = styled.h3`
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: 'Lato', Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    margin-left: 10%;
    margin-top: 90%;
    font-weight: 700;
    color: #333648;
    text-transform: capitalize;
`

const TaskList = styled.div`
    padding: 8px;
    padding-bottom: 50px;
    transition: background-color 0.3s ease;
    // min-height: 100px;
    flex-grow: 1;
    margin-top: -2%;
    border-radius: 0px 0px 3px 3px;
    background-color: #fafafa;
    background-color: ${props => props.isDraggingOver ? 'lightblue' : '#ebecf0'}
`

export default class Column extends React.Component {
    render() {
    // console.log('this.props: ', this.props)
    const tasks = this.props.tasks
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    <Title>
                        {this.props.column.title} 
                        <span style={{opacity: '.7', marginLeft: '4px', fontSize: '90%'}}>
                            ({this.props.column.taskIds.length})
                        </span>
                    </Title>
                    <Droppable droppableId={this.props.column.id}>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                            {tasks.map((task, index) => 
                            <Task 
                                key={task.id} 
                                task={task} 
                                index={index}
                                onShowModal={this.props.onShowModal}
                                // onEditModal={this.props.onEditModal}
                                saveModalDetails={this.props.saveModalDetails}
                            ></Task>)}
                            {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            )}
            </Draggable>
        )

    }
}