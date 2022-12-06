import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    padding: 0px 50px;
    background-color: rgba(19, 19, 23, 0.85);
    backdrop-filter: blur(5px);
    z-index: 10;

    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 25px;
    }

    nav {
        ${({ theme }) => theme.mixins.flexBetween}
    }

    .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul {
        display: flex;
        column-gap: 20px;
        list-style: none;

        li > a {
            text-decoration: none;
        }

        /* @media (max-width: 768px) {
            display: none;
        } */
    }
`;

export default StyledHeader;
