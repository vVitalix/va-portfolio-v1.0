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

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
    }

    main {
        width: 100%;
        max-width: 1500px;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0px 150px;

        @media (max-width: 1080px) {
            padding: 0px 100px;
        }
        @media (max-width: 768px) {
            padding: 0px 50px;
        }
        @media (max-width: 480px) {
            padding: 0px 25px;
        }
    }

    a {
        position: relative;
        display: inline-block;
        color: inherit;
        text-decoration: none;
        transition: var(--transition);

        &:focus {
            color: var(--green);

            &:hover {
                color: var(--green);
            }
        }
  
        &:hover {
            color: var(--faded-green);
     
            &::after,
            &::before {
                width: 100%;
                left: 0;
            }
        }
  
        &::after,
        &::before {
            content: ''; 
            position: absolute;
            top: calc(100% + 5px);
            width: 0;
            right: 0;
            height: 2px;
        }
  
        &::before {
            transition: var(--transition) 0.1s;
            background: var(--linear-green-right);
        }
  
        &::after {
            transition: var(--transition);
            background: var(--green);
        }
    }

    #content {
        height: 2500px;
    }
`;

export default GlobalStyles;
