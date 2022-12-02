import { css } from "styled-components";

import PoppinsBoldTtf from "../fonts/Poppins/Poppins-Bold.ttf";
import PoppinsBoldWoff from "../fonts/Poppins/Poppins-Bold.woff";
import PoppinsBoldWoff2 from "../fonts/Poppins/Poppins-Bold.woff2";
import PoppinsMediumTtf from "../fonts/Poppins/Poppins-Medium.ttf";
import PoppinsMediumWoff from "../fonts/Poppins/Poppins-Medium.woff";
import PoppinsMediumWoff2 from "../fonts/Poppins/Poppins-Medium.woff2";
import PoppinsRegularTtf from "../fonts/Poppins/Poppins-Regular.ttf";
import PoppinsRegularWoff from "../fonts/Poppins/Poppins-Regular.woff";
import PoppinsRegularWoff2 from "../fonts/Poppins/Poppins-Regular.woff2";

const poppinsWeights = {
    700: [PoppinsBoldTtf, PoppinsBoldWoff, PoppinsBoldWoff2],
    500: [PoppinsMediumTtf, PoppinsMediumWoff, PoppinsMediumWoff2],
    400: [PoppinsRegularTtf, PoppinsRegularWoff, PoppinsRegularWoff2],
};

const poppins = {
    name: "Poppins",
    weights: poppinsWeights,
};

const createFontFaces = (fontFamily, style = "normal") => {
    let fontFaces = "";

    for (const [weight, formats] of Object.entries(fontFamily["weights"])) {
        const truetype = formats[0];
        const woff = formats[1];
        const woff2 = formats[2];

        fontFaces += `
          @font-face {
            font-family: '${fontFamily.name}';
            src: url(${woff2}) format('woff2'),
                 url(${woff}) format('woff');
                 url(${truetype}) format('truetype');
            font-weight: ${weight};
            font-style: ${style};
            font-display: auto;
          }
        `;
    }

    return fontFaces;
};

const poppinsFontFaces = createFontFaces(poppins);

const Fonts = css`
    ${poppinsFontFaces}
`;

export default Fonts;
