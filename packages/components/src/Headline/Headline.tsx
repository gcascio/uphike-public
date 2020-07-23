import { bemJoin } from 'bem-join';
import React from 'react';

import './Headline.scss';

const b = bemJoin('headline');

interface HeadlineProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  children?: React.ReactNode;
  color?: 'white' | 'grey' | 'green';
  className?: string;
  isCentered?: boolean;
  wrap?: boolean;
}

const Headline = ({
  size,
  text,
  children,
  color,
  className = '',
  isCentered = false,
  wrap = false,
}: HeadlineProps): JSX.Element => {
  const H = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ): JSX.Element => React.createElement(`h${size}`, props);

  return (
    <H
      className={`${b({
        white: color === 'white',
        grey: color === 'grey',
        green: color === 'green',
        centered: isCentered,
        ellipsis: !wrap,
      })} ${className}`}
    >
      { children || <span>{ text }</span> }
    </H>
  );
};

export default Headline;
