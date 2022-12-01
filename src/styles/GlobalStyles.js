import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";

const GlobalStyles = createGlobalStyle`
    ${Fonts}

    body {
    /* margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--slate); */
    background-color: blueviolet;
    font-family: PoppinsBold;
    }
`;

export default GlobalStyles;
