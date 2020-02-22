import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 15px;
    border-radius: 2px;
    background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
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