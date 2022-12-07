import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';

// Main Layout / Master Page Layout
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <MainNavigation />
            <main>{children}</main>
        </div>
    );
}

export default Layout;
