import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Variables from "./Variables";

const GlobalStyles = createGlobalStyle`
    ${Fonts};
    ${Variables};

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        min-height: 100%;
        background-color: var(--dark-gray-body);
        color: var(--white);
        font-family: var(--font-poppins);
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
