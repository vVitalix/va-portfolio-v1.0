import * as React from "react";
import styled from "styled-components";
//COMPONENTS
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <StyledDiv>Hey, Moon!</StyledDiv>
            <Layout>1111111111111111</Layout>
        </>
    );
}

const StyledDiv = styled.div`
    color: pink;
    background-color: black;
    min-height: 80vh;
    width: 100%;
`;
