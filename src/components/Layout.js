import React from "react";
import { ThemeProvider } from "styled-components";
//COMPONENTS
import { Header } from "../components";
//STYLES
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/Theme";

const Layout = ({ children }) => {
    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Header />
                    <div id="content">{children}</div>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Layout;
