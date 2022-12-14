import styled from "styled-components";
import { minWidth, paleBlue } from '../variables';

const FooterStyle = styled.footer`
    font-size: 11px; 
    text-align: center;
    color: white;
    margin: 0 auto;

    @media screen and (min-width: ${minWidth}){
        margin-top: 20vh;
    }
`;

const FooterLink = styled.a`
    color: ${paleBlue};
`
const Footer = () => {
    return (
        <FooterStyle>
            Challenge by <FooterLink href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</FooterLink>. 
            Coded by <FooterLink href="https://www.frontendmentor.io/profile/marianaceci">Mariana</FooterLink>
        </FooterStyle>
    )
}

export default Footer;
