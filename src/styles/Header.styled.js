import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 5rem;
    padding: 0rem 6.25rem;
    background-color: rgba(19, 19, 23, 0.85);
    z-index: 10;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul {
        display: flex;
        list-style: none;

        /* @media (max-width: 768px) {
            display: none;
        } */
    }
`;

export default StyledHeader;
