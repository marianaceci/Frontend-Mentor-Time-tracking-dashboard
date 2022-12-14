import { createGlobalStyle } from "styled-components";
import { veryDarBlue, minWidth } from './variables';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 112.5%;
    font-family: 'Rubik', sans-serif;
}

body {
    background-color: ${veryDarBlue};
    width: 100vw;
    height: 100vh;

    @media screen and (min-width: ${minWidth}) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
        height: 100%;
        position: relative;
    }
}
`;