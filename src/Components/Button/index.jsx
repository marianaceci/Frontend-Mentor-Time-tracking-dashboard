import styled from "styled-components";

import {  paleBlue, minWidth, transition } from '../variables';

const ButtonStyle = styled.button`
    background: transparent;
    border: none;
    color: ${paleBlue};
    font-size: 1rem;

    @media screen and (min-width: ${minWidth}){
        &:hover{
            cursor: pointer;
            color: white;
            transition: ${transition};
        }
    }
`

export default function Button(props) {    
    return (
        <>
            <ButtonStyle type="button" onClick={props.handleClick}>Daily</ButtonStyle>     
            <ButtonStyle type="button" onClick={props.handleClick}>Weekly</ButtonStyle>     
            <ButtonStyle type="button" onClick={props.handleClick}>Monthly</ButtonStyle>     
        </>
    )
}