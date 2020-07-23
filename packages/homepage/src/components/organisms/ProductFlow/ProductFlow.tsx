
import { bemJoin } from 'bem-join';
import React from 'react';

import Headline from '@uphike/components/Headline';
import Image from '@uphike/components/Image';
import Content from '@uphike/components/Content';
import Button from 'atoms/Button';

import trashPicking from 'images/flow/trash-picking.svg';
import trashPost from 'images/flow/trash-post.svg';
import trashReward from 'images/flow/trash-reward.svg';

import './ProductFlow.scss';

const b = bemJoin('product-flow');

const ProductFlow = (): JSX.Element => (
  <Content>
    <div className={b()}>
      <Headline size={2} wrap isCentered>
        You reward our planet,<br />
        we reward you!
      </Headline>
      <div className={b('items')}>
        <div className={b('item')}>
          <div>
            <Image src={trashPicking} alt="A cartoon person putting trash in a trashcan" />
          </div>
          <Headline size={2} text="Collect" wrap isCentered color="green" />
          <div>
            Keep you tracks clean and collect a bag of trash on your next hike
          </div>
        </div>
        <div className={b('item')}>
          <div>
            <Image src={trashPost} alt="A cartoon person sitting on a big picture" />
          </div>
          <Headline size={2} text="Post" wrap isCentered color="green" />
          <div>
            Post a picture of the trash you have collected so we can verriefy it
          </div>
        </div>
        <div className={b('item')}>
          <div>
            <Image src={trashReward} alt="A cartoon person holding a medal" />
          </div>
          <Headline size={2} text="Enjoy" wrap isCentered color="green" />
          <div>
            For each bag of trash you receive points which can be exchanged for great rewards
          </div>
        </div>
      </div>
      <div className={b('footer')}>
        <Button text="Learn more" color="primary" />
      </div>
    </div>
  </Content>
);

export default ProductFlow;
