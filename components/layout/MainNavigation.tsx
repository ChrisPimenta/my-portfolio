import Link from 'next/link';

const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/experience">Work Experience</Link>
                    <Link href="/contact">Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
