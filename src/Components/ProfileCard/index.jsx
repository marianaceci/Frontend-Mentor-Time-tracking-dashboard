import styled from "styled-components";

import jeremy from '../../assets/image-jeremy.png';
import { darkBlue, desaturatedBlue, paleBlue, minWidth } from '../variables';
import Button from "../Button";

const ProfileContainer = styled.div`
    width= 100%;
    background-color: ${darkBlue};
    border-radius: 20px;
    color: ${paleBlue};
    font-weight: 400;

    @media screen and (min-width: ${minWidth}) {
        grid-area: 1 / 1 / 3 / 2 ;
    }
`;
    
const ProfileTop = styled.div`
    font-size: 0.55rem;
    border-radius: 20px;
    background-color: ${desaturatedBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    @media screen and (min-width: ${minWidth}) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ProfileImg = styled.img`
    width: 70px;
    border-radius: 50%;
    border: 3px solid white;

    @media screen and (min-width: ${minWidth}){
        width: 85px;
    }
`

const ProfileName = styled.div`
    @media screen and (min-width: ${minWidth}){
        margin: 45px 0;
    }
`

const Name = styled.h1`
    font-size: 1.25rem;
    font-weight: 300;
    color: white;

    @media screen and (min-width: ${minWidth}){
        font-size: 2rem;
    }
`

const ProfileBottom = styled.div`
    display: flex;
    align-items: ccenter;
    justify-content: space-between;
    padding: 25px 10%;

    @media screen and (min-width: ${minWidth}){
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 25px;
    }
`

export default function ProfileCard(props) {

    return (
        <>
            <ProfileContainer>
                <ProfileTop>
                    <ProfileImg src={jeremy} alt="photo of Jeremy Robson" />
                    <ProfileName>
                        <p>Report for</p>
                        <Name>Jeremy Robson</Name>
                    </ProfileName>
                </ProfileTop>
                <ProfileBottom>
                    <Button handleClick={props.handleOption} value={'Daily'} />
                    <Button handleClick={props.handleOption} value={'Weekly'} />
                    <Button handleClick={props.handleOption} value={'Monthly'} />
                </ProfileBottom>
            </ProfileContainer>           
        </>
    )
}