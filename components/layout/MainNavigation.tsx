/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MainNavigation = () => {
    // TODO: Style menu properly and have it responsive as a burger menu
    // Move styles to own file groupings and add global styles
    // Design system to have golbal media queries (S, M L) and brand colors typography etc
    const NavbarLink = styled(Link)`
        color: hotpink;
        font-weight: 500;
        padding: 0.5rem 4rem;
        font-size: 24px;
        display: inline-block;
    `

    return (
        <header
            css={css`
                width: 100%;
                height: 5rem;
                padding: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: #ffffff2d;
                @media (max-width: 1024px) {
                    padding: 0.25rem;
                }
                @media (max-width: 700px) {
                    height: 500px;
                    flex-direction: column;
                }
            `}
        >
            <nav
                css={css`
                padding: 0.25rem;
            `}>
                <ul>
                    <NavbarLink href="/about">About</NavbarLink>
                    <NavbarLink href="/projects">Projects</NavbarLink>
                    <NavbarLink href="/experience">Work Experience</NavbarLink>
                    <NavbarLink href="/contact">Contact</NavbarLink>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
