import styled from "styled-components";

const StyledHeader = styled.header`
    ${({ theme }) => theme.mixins.flexCenter}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: rgba(19, 19, 23, 0.85);
    backdrop-filter: blur(5px);
    box-shadow: var(--shadow-header);
    z-index: 10;

    nav {
        ${({ theme }) => theme.mixins.flexBetween}
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        padding: 0px 150px;

        @media (max-width: 1080px) {
            padding: 0px 100px;
        }
        @media (max-width: 768px) {
            padding: 0px 50px;
        }
        @media (max-width: 480px) {
            padding: 0px 25px;
        }

        .logo-container {
            ${({ theme }) => theme.mixins.flexCenter}

            a {
                ${({ theme }) => theme.mixins.flexCenter}
                width: 42px;
                height: 42px;
            }
        }
    }

    ul {
        display: flex;
        column-gap: 50px;
        list-style: none;

        @media (max-width: 1080px) {
            column-gap: 30px;
        }
        /* @media (max-width: 768px) {
            display: none;
        } */

        li {
            font-size: var(--fs-xs);
            font-weight: 500;
        }
    }
`;

export default StyledHeader;
