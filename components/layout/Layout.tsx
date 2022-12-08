/** @jsxImportSource @emotion/react */
import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

// Main Layout / Master Page Layout
const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <div>
            <MainNavigation />
            <main css={css`
                width: 300;
                height: 200;
            `}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
