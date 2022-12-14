import styled from "styled-components";
import Cards from "../Cards";
import { minWidth } from "../variables";

const MainStyle = styled.main`
    margin: 10vh auto;
    background: transparent;
    max-width: 90%;

    @media screen and (min-width: ${minWidth}) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        max-width: 1100px;
        margin: auto;
    }
`

export default function Main() {

    return (
        <MainStyle>
            <Cards />
        </MainStyle>
    )
}