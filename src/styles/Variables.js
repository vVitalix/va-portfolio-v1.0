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
        --linear-green-left: linear-gradient(
            90deg,
            #64ffda 0%,
            rgba(100, 255, 218, 0.4) 100%
        );
        --linear-green-right: linear-gradient(
            90deg,
            rgba(100, 255, 218, 0.4) 0%,
            #64ffda 100%
        );

        --shadow-header: 0px 10px 25px -10px #0d0f13;
        --shadow-block: 1px 4px 8px #0d0f13;
        --shadow-active-green-xs: 0px 0px 2px #64ffda;
        --shadow-active-green-s: 0px 0px 3px #64ffda;
        --shadow-active-green: 0px 0px 3px 1px #64ffda;

        --font-poppins: "Poppins", sans-serif;

        --fs-xxs: 0.875rem;
        --fs-xs: 1rem;
        --fs-sm: 1.125rem;
        --fs-md: 1.25rem;
        --fs-lg: 1.5rem;
        --fs-xl: 1.75rem;
        --fs-xxl: 2.5rem;
        --fs-heading: 4rem;

        --border-radius: 5px;
        --border-radius-big: 20px;

        --transition: all 0.25s cubic-bezier(0.65, 0.05, 0.35, 1);
    }
`;

export default Variables;
