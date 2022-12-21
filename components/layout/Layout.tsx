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
                background-color: #222222;
                padding: 2rem;
                border-radius: 8px;
            `}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
