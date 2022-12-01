import { css } from "styled-components";

import PoppinsBoldTtf from "../fonts/Poppins/Poppins-Bold.ttf";

const Fonts = css`
    @font-face {
        font-family: PoppinsBold;
        src: url(${PoppinsBoldTtf}) format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: auto;
    }
`;
export default Fonts;
