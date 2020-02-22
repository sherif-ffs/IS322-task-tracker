import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 20px;
    margin: 2px;
    margin-bottom: 2px;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.isDragging ? '#fafafa' : 'white'};
    transform: ${props => props.isDragging ? 'rotate(5deg)' : 'rotate(0deg)'}

`
export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.title}
                    </Container>
                )}
            </Draggable>
        )
    }
}