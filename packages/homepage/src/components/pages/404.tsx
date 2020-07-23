import { bemJoin } from 'bem-join';
import React from 'react';

import Button from 'atoms/Button';
import SEO from 'seo';

import './404.scss';

const b = bemJoin('not-found');

const NotFoundPage = (): JSX.Element => (
  <>
    <SEO
      title="404: Not found"
      description="Sorry, the page you have requested is not available."
      noIndex
    />
    <div className={b()}>
      <div className={b('code')}><span>404</span></div>
      <div className={b('text')}>Something’s missing</div>
      <div className={b('text', { small: true })}>The site you looking for is not found.</div>
      <Button to="/" text="Go to homepage" color="primary" isLarge />
    </div>
  </>
);

export default NotFoundPage;
