import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";
import useScrollDirection from "../hooks/useScrollDirection";
//COMPONENTS
import { LogoIcon } from "./icons";
//STYLES
import StyledHeader from "../styles/Header.styled";

const Header = props => {
    // const [isMounted, setIsMounted] = useState(!isHome);
    const scrollDirection = useScrollDirection("down");
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        // const timeout = setTimeout(() => {
        //     setIsMounted(true);
        // }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => {
            // clearTimeout(timeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <StyledHeader
            scrollDirection={scrollDirection}
            scrolledToTop={scrolledToTop}
        >
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
};

export default Header;
