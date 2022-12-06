import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Variables from "./Variables";

const GlobalStyles = createGlobalStyle`
    ${Fonts};
    ${Variables};

    html {
        width: 100%;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    

    body {
        width: 100%;
        min-height: 100%;
        background-color: var(--dark-gray-body);
        color: var(--white);
        font-family: var(--font-poppins);
        font-size: var(--fs-sm);
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
