import { bemJoin } from 'bem-join';
import React from 'react';

import './Content.scss';

const b = bemJoin('content');

interface Props {
  children?: React.ReactNode;
  noPadding?: boolean;
  flex?: boolean;
}

const Content = ({ children, noPadding = false, flex = false }: Props): JSX.Element => (
  <div className={b({ padding: !noPadding })}>
    <div className={b('content', { flex })}>
      {children}
    </div>
  </div>
);

export default Content;
