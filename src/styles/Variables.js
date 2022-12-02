import { css } from "styled-components";

const Variables = css`
    :root {
        --dark-gray-body: #131317;
        --dark-gray: #1a1a1e;
        --dark-navy-shadow: #0d0f13;
        --dark-navy: #101217;
        --white: #fff7fa;
        --pink: #ff649c;
        --green: #64ffda;
        --faded-green: rgba(100, 255, 218, 0.4);
        --linear-green: linear-gradient(
            90deg,
            #64ffda 0%,
            rgba(100, 255, 218, 0.4) 100%
        );

        --font-poppins: "Poppins", sans-serif;

        --color-transparentBlack: rgba(0, 0, 0, 0.73);
        --color-transparentGrey: rgba(57, 55, 72, 0.22);
        --shadow-boxShadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
    }
`;

export default Variables;
