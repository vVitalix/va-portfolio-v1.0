import React from "react";
//COMPONENTS
import { Header } from "../components";
//STYLES
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
    return (
        <>
            <div id="root">
                <GlobalStyles />
                <Header />
                <div id="content">{children}</div>
            </div>
        </>
    );
};

export default Layout;
