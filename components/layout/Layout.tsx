import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

// Main Layout / Master Page Layout
const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <div>
            <MainNavigation />
            <main css={css`
                margin: 3rem auto;
                width: 90%;
                max-width: 40rem;
                background-color: darkgray;
                padding: 2rem;
            `}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
