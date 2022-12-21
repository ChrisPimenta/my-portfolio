import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';
import classes from './Layout.module.css';

// Main Layout / Master Page Layout
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
