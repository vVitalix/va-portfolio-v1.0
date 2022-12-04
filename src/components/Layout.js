import React from "react";
//STYLES
import GlobalStyles from "../styles/GlobalStyles";
// import GlobalStyles from "@styles/GlobalStyles";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <div>{children}</div>
            <div>Layout</div>
        </>
    );
};

export default Layout;
