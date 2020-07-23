import { bemJoin } from 'bem-join';
import React from 'react';
import { Link } from 'gatsby';

import Logo from '@uphike/components/Logo';
import Content from '@uphike/components/Content';

import './Header.scss';

const b = bemJoin('header');

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({
  children,
}: HeaderProps): JSX.Element => (
  <div className={b()}>
    <Content noPadding>
      <div className={b('content')}>
        <div className={b('side-content')}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={b('main-content')}>
          {children}
        </div>
        <div className={b('side-content')} />
      </div>
    </Content>
  </div>
);

export default Header;
