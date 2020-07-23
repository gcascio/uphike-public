import { bemJoin } from 'bem-join';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

import Logo from '@uphike/components/Logo';
import Headline from '@uphike/components/Headline';
import Content from '@uphike/components/Content';
import { features } from 'organisms/Features';

import './Footer.scss';

const b = bemJoin('footer');

const Footer = (): JSX.Element => (
  <Content>
    <footer className={b()}>
      <div className={b('content')}>
        <div className={b('logo')}><Logo /></div>
        <div className={b('list')}>
          <Headline size={5} text="Company" />
          <Link to="/privacy">Privacy</Link>
          <Link to="/imprint">Imprint</Link>
        </div>

        <div className={b('list')}>
          <Headline size={5} text="Features" />
          {features.map(({ slug, topic }) => (
            <Link key={slug} to={`/#${slug}`}>{topic}</Link>
          ))}
        </div>

        <div className={b('social')}>
          <OutboundLink href="https://instagram.com/uphike" aria-label="Instagram" target="_blank" rel="noopener">
            <FiInstagram />
          </OutboundLink>
          <OutboundLink href="https://twitter.com/uphike" aria-label="Twitter" target="_blank" rel="noopener">
            <FiTwitter />
          </OutboundLink>
          <OutboundLink
            href="https://linkedin.com/company/uphike"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener"
          >
            <FiLinkedin />
          </OutboundLink>
        </div>
      </div>
      <div className={b('copyright')}>Made in Germany © {new Date().getFullYear()}</div>
    </footer>
  </Content>
);

export default Footer;
