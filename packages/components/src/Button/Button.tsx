import { bemJoin } from 'bem-join';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LocationDescriptor, Location, LocationDescriptorObject } from 'history';

import './Button.scss';

const b = bemJoin('button');

export interface ButtonProps {
  text: string;
  color: 'primary' | 'secondary' | 'tertiary';
  isLarge?: boolean;
  isSubmit?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onMouseDown?: (event: React.MouseEvent) => void;
  className?: string;
  to?: string | LocationDescriptorObject<{}> | ((location: Location<{}>) => LocationDescriptor<{}>);
  depth?: boolean;
  internalLinkComponent?: typeof React.Component;
  externalLinkComponent?: typeof React.Component;
}

const Button = ({
  text,
  color = 'secondary',
  isLarge = false,
  isSubmit = false,
  isDisabled = false,
  depth = true,
  to,
  className = '',
  internalLinkComponent: InternalLink,
  externalLinkComponent: ExternalLink,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const sharedProps = {
    className: `${b({
      [color]: true,
      large: isLarge,
      depth: color === 'primary' && depth,
    })} ${className}`,
    ...otherProps,
  };

  const children = (
    <>
      {color === 'secondary' ? <span>{text}</span> : text}
      {color === 'tertiary' && <FiArrowRight size={20} />}
    </>
  );

  const renderInternalLinkComponent = (p: RouterLinkProps<{}>): JSX.Element => (
    InternalLink
      ? <InternalLink {...p}>{children}</InternalLink>
      : <RouterLink {...p}>{children}</RouterLink>
  );

  const renderExternalLinkComponent = (p: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => (
    ExternalLink
      ? <ExternalLink {...p}>{children}</ExternalLink>
      : <a {...p}>{children}</a>
  );

  if (to) {
    if (typeof to === 'string' && !to.startsWith('/')) {
      return renderExternalLinkComponent({
        href: to,
        children,
        ...sharedProps,
      });
    }
    if (typeof to !== 'string' || to.startsWith('/')) {
      return renderInternalLinkComponent({
        to,
        children,
        ...sharedProps,
      });
    }
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={isSubmit ? 'submit' : 'button'}
      {...sharedProps}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
