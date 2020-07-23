import { bemJoin } from 'bem-join';
import React from 'react';

import './Paragraph.scss';

export const b = bemJoin('paragraph');

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: Props): JSX.Element => (
  <p className={`${b()} ${className}`}>
    {children}
  </p>
);

export default Paragraph;
