import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";

const GlobalStyles = createGlobalStyle`
    ${Fonts};

    body {

font-family: 'Poppins', sans-serif;

    /* margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--slate); */
    background-color: blueviolet;
    
    font-weight: 400;
    }
`;

export default GlobalStyles;
