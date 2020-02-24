import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const Container = styled.div`
    // height: 50px;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    font-size: 12px;
`
export default class Form extends React.Component {
    render() {
        return (
            <Container>
                <Input></Input>
            </Container>
        )
    }
}