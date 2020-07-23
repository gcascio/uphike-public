import React from 'react';

import Headline from '@uphike/components/Headline';
import Content from '@uphike/components/Content';
import Layout, { b } from '../Layout';

interface Props {
  children: React.ReactNode;
  title: string;
}

const TextLayout = ({ children, title }: Props): JSX.Element => (
  <Layout>
    <Headline size={1} text={title} className={b('headline')} wrap isCentered />
    <Content>
      {children}
    </Content>
  </Layout>
);

export default TextLayout;
