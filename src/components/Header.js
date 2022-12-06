import React from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";
//COMPONENTS
import { LogoIcon } from "./icons";
//STYLES
import StyledHeader from "../styles/Header.styled";

const Header = props => (
    <StyledHeader>
        <nav>
            <div className="logo-container">
                <a href="/" aria-label="intro">
                    <LogoIcon />
                </a>
            </div>

            <ul>
                {navLinks &&
                    navLinks.map(({ url, name }, index) => (
                        <li key={index}>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))}
            </ul>
        </nav>
    </StyledHeader>
);

export default Header;
