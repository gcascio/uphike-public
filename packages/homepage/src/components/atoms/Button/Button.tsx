import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import ESButton from '@uphike/components/Button';

const Button: typeof ESButton = (props) => (
  <ESButton
    internalLinkComponent={GatsbyLink}
    externalLinkComponent={OutboundLink}
    {...props}
  />
);

export default Button;
