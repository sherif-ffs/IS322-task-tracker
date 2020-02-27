import React from 'react'

import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import '../../styles/GridView/input.css'
import '../../styles/GridView/formSelect.css';
import '../../styles/GridView/formButton.css'


const ModalWrapper = styled.div`
    width: 30vw;
    height: 30vh;
    border: 1px solid red;
    background-color: #ebecf0;
    border: 1px solid lightgrey;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
    border-radius: 3px;
    display: flex; 
    flex-direction: row;
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 60px;
    margin-top: 10%;
`
const Container = styled.form`
    height: min-content;
    width: 200px;
    margin: 8px;
    margin-left: 2vw;
    background-color: #ebecf0;
    display: flex;
    // flex-direction: row;
    flex-direction: column;
    padding-bottom: 10px;
    font-size: 12px;
    // border: 1px solid lightgrey;
    // border: 1px solid red;
    // box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
    border-radius: 3px;
`

const Title = styled.h3`
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: 'Lato', Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    margin-left: 10%;
    margin-top: 90%;
    font-weight: 700;
    color: #333;
    text-transform: capitalize;
`

export default class Modal extends React.Component {
    state = {
        title: 'Task 1',
        type: 'task',
        status: 'todo'
      }

      onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
          title: this.state.title,
          type: this.state.type,
          status: this.state.status
        });
        document.querySelector('.modal-form').reset()
      }

    render() {
        return (
            <ModalWrapper>
                <Container onSubmit={this.onSubmit.bind(this)} className="modal-form">
                    <Title>Edit Task</Title>
                    <label>New Task Name</label>
                    <input 
                        className="form-input" 
                        placeholder="Enter a title for this card..."
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                        >
                    </input>
                    <FormControl className="modal-form-select-container">
                        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={this.state.type}
                        onChange={e => this.setState({ type: e.target.value })}
                        >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value='bug'>Bug</MenuItem>
                        <MenuItem value='feature'>Feature</MenuItem>
                        <MenuItem value='task'>Task</MenuItem>
                        </Select>
                        <FormHelperText>Set new type</FormHelperText>
                    </FormControl>
                </Container>
                <ButtonsWrapper>
                        <Button variant="contained" className="form-button" type="submit">Edit Task</Button>
                        <Button variant="contained" className="form-button delete" type="submit">Delete Task</Button>
                    </ButtonsWrapper>
            </ModalWrapper>
        )
    }
}