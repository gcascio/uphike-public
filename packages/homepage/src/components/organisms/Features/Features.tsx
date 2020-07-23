
import { bemJoin } from 'bem-join';
import React from 'react';
import slugify from 'slug';

import Headline from '@uphike/components/Headline';
import Image from '@uphike/components/Image';
import Content from '@uphike/components/Content';
import Button from 'atoms/Button';
import Paragraph from 'atoms/Paragraph';

import trust from 'images/features/trust.png';
import badge from 'images/features/badge.png';
import treat from 'images/features/treat.png';
import community from 'images/features/community.png';

import './Features.scss';

interface Feature {
  headline: string;
  text: string;
  image: string;
  alt: string;
  topic: string;
  slug?: string;
  link?: string;
}

const featureList: Feature[] = [
  {
    topic: 'Verified content',
    headline: 'Content you can trust',
    text: `
      All pictures of collected trash are verrified with a combination of modern image \
      recognition and real humans. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
      sed diam nonumy eirmod tempor invidunt.
    `,
    image: trust,
    alt: 'A UI snippet showing the design for the interaction area where the voice channels are currently selected',
  },
  {
    topic: 'Community',
    headline: 'Stay updated and support others',
    text: `
      See what others around you have accomplished and get inspired. Lorem ipsum dolor sit amet, \
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna \
      aliquyam erat, sed diam voluptua..
    `,
    image: community,
    alt: 'Four exemplary images of conferences',
  },
  {
    topic: 'Badges',
    headline: 'Keep track of your success',
    text: `
      Stay motivated by seeing what you have achived. Lorem ipsum dolor sit amet, \
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore \
      et dolore magna aliquyam erat, sed diam voluptua. 
    `,
    image: badge,
    alt: 'An exemplary image of a presenter speaking on a stage at a conference',
  },
  {
    topic: 'Rewards',
    headline: 'You deserve a treat',
    text: `
      After all your great achievements in cleaning yor environment you can collect a reward. \
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor \
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..
    `,
    image: treat,
    alt: 'Four exemplary images of conferences',
  },
];

export const features = featureList.map((feature): Feature => ({
  ...feature,
  slug: slugify(feature.topic, { lower: true }),
}));

const b = bemJoin('features');

const Features = (): JSX.Element => (
  <>
    <div id="features" />
    <Content>
      <div className={b()}>
        {features.map(({
          headline,
          text,
          image,
          link,
          topic,
          alt,
          slug,
        }) => (
          <section key={headline} id={slug}>
            <div className={b('text')}>
              {topic && <div className={b('topic')}><span>{topic}</span></div>}
              <Headline size={2} text={headline} wrap />
              <Paragraph>{text}</Paragraph>
              {link && <Button to={link} text="More information" color="tertiary" />}
            </div>
            <div className={b('image-wrapper')}>
              <Image src={image} alt={alt} />
            </div>
          </section>
        ))}
      </div>
    </Content>
  </>
);

export default Features;
