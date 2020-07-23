import { bemJoin } from 'bem-join';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';

import { features } from 'organisms/Features';
import { id as productIntroId } from 'organisms/ProductIntro';

import './MainNavigation.scss';

const b = bemJoin('main-navigation');

interface MainNavigationProps {
  className?: string;
}

const MainNavigation = ({ className = '' }: MainNavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (): void => setOpen(!open);

  return (
    <div className={`${b()} ${className}`}>
      <button type="button" aria-label="Menu" className={b('mobile_button')} onClick={toggleOpen}><FiMenu /></button>
      <div className={b('wrapper', { open })}>
        <div className={b('navigation')}>
          <Link to="/" className={b('item')} activeClassName={b('item', { active: true })}>Home</Link>
          <span className={b('item', { dropdown: true })}>
            <Link to="/#features" className={b('item')} activeClassName={b('item', { active: true })}>
              Features <FiChevronDown size={16} />
            </Link>
            <div className={b('sub-menu')}>
              {features.map(({ slug, topic }) => (
                <Link key={slug} to={`/#${slug}`}>{topic}</Link>
              ))}
            </div>
          </span>
          <Link to={`/#${productIntroId}`} className={b('item')} activeClassName={b('item', { active: true })}>
            Companies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
