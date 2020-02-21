import React from 'react'
import styled from 'styled-components'
import Task from './Task'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`

const Title = styled.h3`
    padding: 8px
`

const TaskList = styled.div`
    padding: 8px
`

export default class Column extends React.Component {
    render() {
    const tasks = Object.values(this.props.tasks)
    // console.log('tasks: ', tasks)
    // console.log('this.props.tasks: ', this.props.tasks)
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>
                    {tasks.map((task, i) => <Task key={task[i]} task={task}></Task>)}
                </TaskList>
            </Container>
        )

    }
}