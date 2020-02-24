import React from 'react'
import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    width: 250px;
    height: min-content;
    background-color: #ebecf0;
    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    padding-top: 20px;
    font-family: 'Lato', Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    margin-left: 10%;
    margin-top: 90%;
    font-weight: 700;
    color: #333648;
    text-transform: capitalize;
`

const TaskList = styled.div`
    padding: 8px;
    padding-bottom: 50px;
    // transition: background-color 0.3s ease;
    min-height: 100px;
    flex-grow: 1;
    margin-top: 1%;
    border-radius: 0px 0px 3px 3px;
    background-color: #fafafa;
    background-color: ${props => props.isDraggingOver ? '#ddd' : '#ebecf0'}

`

export default class Column extends React.Component {
    render() {
    const tasks = Object.values(this.props.tasks)
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
                    <Title>{this.props.column.title}</Title>
                    <Droppable droppableId={this.props.column.id}>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                            {tasks.map((task, index) => <Task key={task.id} task={task} index={index}></Task>)}
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