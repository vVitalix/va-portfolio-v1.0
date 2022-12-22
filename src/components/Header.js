import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";
import useScrollDirection from "../hooks/useScrollDirection";
//COMPONENTS
import { LogoIcon } from "./icons";
//STYLES
import StyledHeader from "../styles/Header.styled";
//ANIMATIONS
import { motion } from "framer-motion";

//Variants
const listVariants = {
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const listItemVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        color: "#64ffda",
    },
    show: {
        opacity: 1,
        y: 0,
        color: "#fff7fa",
        transition: {
            ease: [0.65, 0.05, 0.35, 1],
            duration: 0.35,
        },
    },
};

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

                <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                >
                    {navLinks &&
                        navLinks.map(({ url, name }, index) => (
                            <motion.li variants={listItemVariants} key={index}>
                                <Link to={url}>{name}</Link>
                            </motion.li>
                        ))}
                </motion.ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;
