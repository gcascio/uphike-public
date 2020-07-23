import { bemJoin } from 'bem-join';
import React from 'react';
import { IconContext } from 'react-icons';

import Header from 'organisms/Header';
import Footer from 'organisms/Footer';
import CookieConsent from 'molecules/CookieConsent';
import MainNavigation from 'molecules/MainNavigation';

import './Layout.scss';

export const b = bemJoin('layout');

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <IconContext.Provider value={{ size: '24', className: 'icon' }}>
    <div className={b()}>
      <Header>
        <MainNavigation />
      </Header>
      {children}
      <Footer />
      { typeof document !== 'undefined' ? <CookieConsent /> : null }
    </div>
  </IconContext.Provider>
);

export default Layout;
