import React, { FC } from 'react';

import './Layout.scss';
import LayoutHeader from './Header/LayoutHeader';
import LayoutFooter from './Footer/LayoutFooter';
import LayoutBody from './Body/LayoutBody';

const Layout: FC = ({ children }) => (
  <main className="layout">
    <LayoutHeader />
    <LayoutBody>
      {children}
    </LayoutBody>
    <LayoutFooter />
  </main>
);

export default Layout;
