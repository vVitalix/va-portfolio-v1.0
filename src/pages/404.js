import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";
import styled from "styled-components";

const NotFoundPage = () => {
    return (
        <Layout>
            <StyledMainContainer className="fillHeight">
                <StyledTitle>404</StyledTitle>
                <StyledSubtitle>Page Not Found</StyledSubtitle>
                <StyledHomeButton to="/">Go Home</StyledHomeButton>
            </StyledMainContainer>
        </Layout>
    );
};

const StyledMainContainer = styled.main`
    /* ${({ theme }) => theme.mixins.flexCenter}; */
    flex-direction: column;
`;
const StyledTitle = styled.h1`
    color: var(--green);
    /* font-family: var(--font-mono); */
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;
const StyledSubtitle = styled.h2`
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
    /* ${({ theme }) => theme.mixins.bigButton}; */
    margin-top: 40px;
`;

export default NotFoundPage;
