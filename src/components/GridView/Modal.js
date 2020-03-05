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
import '../../styles/GridView/modal.css'

// const ModalWrapper = styled.div`
//     width: 30vw;
//     height: 30vh;
//     border: 1px solid red;
//     background-color: #ebecf0;
//     border: 1px solid lightgrey;
//     box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
//     border-radius: 3px;
//     display: none; 
//     flex-direction: row;
//     margin-top: 15vh;
//     z-index: 999!important;
// `
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    display: none;
    z-index: 999!important;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`
// const Container = styled.form`
//     height: min-content;
//     width: 200px;
//     margin: 8px;
//     margin-left: 2vw;
//     background-color: #ebecf0;
//     display: flex;
//     // flex-direction: row;
//     flex-direction: column;
//     padding-bottom: 10px;
//     z-index: 999!important;
//     font-size: 12px;
//     // border: 1px solid lightgrey;
//     // border: 1px solid red;
//     // box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
//     border-radius: 3px;
// `

const Container = styled.div`
    position: fixed;
    background: #ebecf0;
    width: 500px;
    height: auto;
    display: flex;
    z-index: 999!important;
    flex-direction: column;
    font-size: 12px;
    top: 30%;
    left: 50%;
    border-radius: 3px;
    border: 1px solid lightgrey;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
    transform: translate(-50%,-50%);
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 10px;
    margin-top: 1%;
    width: 90%;
    margin-left: 5%; 
    padding-bottom: 30px;
`

const Title = styled.h3`
    padding-top: 20px;
    flex: 0;
    padding-bottom: 10px;
    font-family: 'Lato', Georgia, 'Times New Roman', Times, serif;
    font-size: 1.4rem;
    margin-left: 5%;
    margin-top: 90%;
    font-weight: 700;
    color: #333;
    text-transform: capitalize;
`

export default class Modal extends React.Component {
    state = {
        title: 'test',
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
            <ModalWrapper className="modal-wrapper">
                <Container onSubmit={this.onSubmit.bind(this)} className="modal-form">
                    <Title>Edit Task</Title>
                    <input 
                        className="form-input" 
                        placeholder="Enter a title for this card..."
                        value={this.state.title}
                        onChange={e => this.setState({ title: this.state.title })}
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
                    <ButtonsWrapper>
                        <Button variant="contained" className="form-button-modal" type="submit">Save Changes</Button>
                        <Button variant="contained" className="form-button-modal delete" type="submit">Delete Task</Button>
                </ButtonsWrapper>
                </Container>
                
            </ModalWrapper>
        )
    }
}