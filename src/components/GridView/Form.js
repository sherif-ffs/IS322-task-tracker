import React from 'react'

import styled from 'styled-components'
import Input from './Input'
import FormSelect from './FormSelect'
import FormButton from './FormButton';

const Container = styled.div`
    height: min-content;
    margin-top: 1vh;
    width: 250px;
    margin: 8px;
    background-color: #ebecf0;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    font-size: 12px;
    border: 1px solid lightgrey;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .9);
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

export default class Form extends React.Component {
    render() {
        return (
            <Container>
                <Title>Add New Task</Title>
                <Input></Input>
                <FormSelect></FormSelect>
                <FormButton></FormButton>
            </Container>
        )
    }
}