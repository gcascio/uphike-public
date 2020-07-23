
import { bemJoin } from 'bem-join';
import React from 'react';

import Headline from '@uphike/components/Headline';
import Content from '@uphike/components/Content';
import Button from 'atoms/Button';
import CapabilityList from 'molecules/CapabilityList';

import './ProductIntro.scss';

const b = bemJoin('product-intro');

export const id = 'product-intro';

const ProductIntro = (): JSX.Element => (
  <Content>
    <Headline size={2} text="I’d like to place incentives" wrap isCentered />
    <div id={id} className={b()}>
      <div>
        <CapabilityList capabilities={[
          { text: '"Green washing"' },
          { text: 'Tap into a worldwide audience' },
          { text: 'Long term customer loyalty through eco-friendly community' },
        ]}
        />
      </div>
      <div className={b('cta')}>
        <Headline size={3} text="Interested in placing incentives?" wrap isCentered />
        <Button
          to="mailto:info@uphike.org"
          text="Reach out to us"
          color="primary"
          isLarge
        />
      </div>
    </div>
  </Content>
);

export default ProductIntro;
