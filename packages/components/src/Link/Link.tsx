import { bemJoin } from 'bem-join';
import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LocationDescriptor, Location, LocationDescriptorObject } from 'history';

import './Link.scss';

const b = bemJoin('link');

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  inheritColor?: boolean;
  underline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
  to?: string | LocationDescriptorObject<{}> | ((location: Location<{}>) => LocationDescriptor<{}>);
  className?: string;
  internalLinkComponent?: typeof React.Component;
  externalLinkComponent?: typeof React.Component;
}

const Link = ({
  children,
  inheritColor = false,
  underline = false,
  onClick,
  to,
  className = '',
  internalLinkComponent: InternalLink,
  externalLinkComponent: ExternalLink,
  ...props
}: LinkProps): JSX.Element => {
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

  const classes = `${b({
    inherit: inheritColor,
    underline,
  })} ${className}`;

  if (to) {
    if (typeof to === 'string' && !to.startsWith('/')) {
      return renderExternalLinkComponent({
        className: classes,
        href: to,
        onClick,
        ...props,
      });
    }
    if (typeof to !== 'string' || to.startsWith('/')) {
      return renderInternalLinkComponent({
        className: classes,
        to,
      });
    }
  }

  return (
    <button
      {...props}
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
