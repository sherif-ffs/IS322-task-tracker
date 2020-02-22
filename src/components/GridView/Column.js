import React from 'react'
import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 300px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    padding: 8px
`

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.3s ease;
    min-height: 100px;
    flex-grow: 1;
    background-color: #fafafa;
    background-color: ${props => props.isDraggingOver ? 'skyblue' : '#fafafa'}

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