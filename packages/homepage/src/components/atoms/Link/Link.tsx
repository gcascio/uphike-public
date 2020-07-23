import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import ESLink from '@uphike/components/Link';

const Link: typeof ESLink = (props) => (
  <ESLink
    internalLinkComponent={GatsbyLink}
    externalLinkComponent={OutboundLink}
    {...props}
  />
);

export default Link;
