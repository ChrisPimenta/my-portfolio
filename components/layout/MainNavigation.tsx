/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MainNavigation = () => {
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
                display: flex;
                padding: 1rem;
                justify-content: center;
                align-items: center;
                background-color: #ffffff2d;
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
