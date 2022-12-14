import styled from "styled-components";
import { useState } from "react";

import infos from "../../assets/data.json";
import { darkBlue, paleBlue, minWidth, desaturatedBlue, transition } from '../variables';
import ellipsis from "../../assets/icon-ellipsis.svg";
import ProfileCard from "../ProfileCard";

const CardContainer = styled.div`
    border: 0.1px solid ${darkBlue};
    margin-top: 20px;
    border-radius: 20px;
    color: ${paleBlue};
    font-weight: 400;
    background-color: ${props => props.color};
    background-repeat: no-repeat;
    background-position: 95% -15%;

    @media screen and (min-width: ${minWidth}) {
        margin-top: 0px;
    }

`

const CardText = styled.div`
    background-color: ${darkBlue};
    margin-top: 40px;
    border-radius: 15px;
    padding: 25px;
    font-size: 0.6rem;
    font-weight: 300;  

    @media screen and (min-width: ${minWidth}){
        padding: 30px;
        
        &:hover{
            cursor: pointer;
            background-color: ${desaturatedBlue};
            transition: ${transition};
        }
    }
`;

const ContainerText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopText = styled(ContainerText)`
    margin-bottom: 7.5px;
    font-size: 0.9rem;
    font-weight: 500;
    color: white;
`;

const Ellipsis = styled.img`
    @media screen and (min-width: ${minWidth}){
        &:hover{
            cursor: pointer;
            filter: brightness(2);
            transition: ${transition};
            
            ${CardText}{
                background-color: ${darkBlue};
            }
        }
    }
`

const BottomText = styled(ContainerText)`
    @media screen and (min-width: ${minWidth}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Hours = styled.p`
    color: white;
    font-size: 1.75rem;

    @media screen and (min-width: ${minWidth}) {
        font-size: 3rem;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

export default function Cards() {

    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [text, setText] = useState('');

    const handleSelectOption = (e) => { 
        
        let clicked = e.target.innerText;
        setCurrent(prevCurrent => {
            return clicked == "Daily" ? prevCurrent = infos.map((info) => info.timeframes.daily.current)
                : clicked == "Weekly" ? prevCurrent = infos.map((info) => info.timeframes.weekly.current)
                : prevCurrent = infos.map((info) => info.timeframes.monthly.current)
        })
        setPrevious(prevPrevious => {
            return clicked == "Daily" ? prevPrevious = infos.map((info) => info.timeframes.daily.previous)
                : clicked == "Weekly" ? prevPrevious = infos.map((info) => info.timeframes.weekly.previous)
                : prevPrevious = infos.map((info) => info.timeframes.monthly.previous)
        })
        setText(prevText => {
            return clicked == "Daily" ? prevText = 'Yesterday'
                : clicked == "Weekly" ? prevText = 'Last week'
                : prevText = 'Last month'
        })

        let arrayText = []
        Object.values(e.target.parentElement.children).map((child) => arrayText.push(child.innerText))
        let indexArray = arrayText.map((element, index) => element == clicked ? index : '')
        let indexSelected = +(indexArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0))

        Object.values(e.target.parentElement.children).map((child) => child.style.color = '')
        e.target.parentElement.children[indexSelected].style.color = 'white'        
    }

    return (
        <>
            <ProfileCard
                handleOption={handleSelectOption}
            />
            {infos.map((info, index) => {
                return (
                    <CardContainer key={index} style={{ backgroundColor: info.color, backgroundImage: `url(${info.src})`}}>
                        <CardText>
                            <TopText>
                                <p>{info.title}</p>
                                <Ellipsis src={ellipsis} alt="ellipsis" />
                            </TopText>                                        
                            <BottomText>                                
                                <Hours>{current[index]}hrs</Hours>
                                <p>{text} - {previous[index]}hrs</p>
                            </BottomText>
                        </CardText>
                    </CardContainer>
                )
            })}                       
        </>  
    )
}