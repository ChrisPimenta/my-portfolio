import Link from 'next/link';
import classes from './MainNavigation.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'
import React, { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';

const MainNavigation = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { pathname } = useRouter();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMenuOpen(event.target.checked);
    }

    // Close menu on navigating to a new path
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname])

    return (
        <header>
            <nav className={classes.navbar}>
                <input type="checkbox" id="toggler" onChange={onChangeHandler} checked={menuOpen} />
                <label htmlFor="toggler">
                    {menuOpen ?
                        <AiOutlineClose className={classes.icon} /> :
                        <GiHamburgerMenu className={classes.icon} />
                    }
                </label>
                <div className={classes.menu}>
                    <ul>
                        <Link href="/about" className={pathname === '/about' ? classes['active-link'] : ''}>About</Link>
                        <Link href="/projects" className={pathname === '/projects' ? classes['active-link'] : ''}>Projects</Link>
                        <Link href="/experience" className={pathname === '/experience' ? classes['active-link'] : ''}>Work Experience</Link>
                        <Link href="/contact" className={pathname === '/contact' ? classes['active-link'] : ''}>Contact</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation;
