import React from 'react';

import Features from 'organisms/Features';
import IndexHead from 'organisms/IndexHead';
import ProductFlow from 'organisms/ProductFlow';
import ProductIntro from 'organisms/ProductIntro';
import SEO from 'seo';
import Layout from 'templates/Layout';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO
      title="On demand event streaming"
      description={`
        Get access to a whole new event experience and participate in live events or watch them whenever you like.
      `}
    />
    <IndexHead />
    <ProductFlow />
    <Features />
    <ProductIntro />
  </Layout>
);

export default IndexPage;
