
import { bemJoin } from 'bem-join';
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';
import { FiChevronDown } from 'react-icons/fi';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import Content from '@uphike/components/Content';
import Image from '@uphike/components/Image';
import Headline from '@uphike/components/Headline';
import Button from 'atoms/Button';
import Paragraph from 'atoms/Paragraph';

import hikingImage from '../../../images/cover/hike.png';

import './IndexHead.scss';

const b = bemJoin('index-head');

const IndexHead = (): JSX.Element => {
  const [newsletterMessage, setNewsletterMesage] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const formElement = e.target as Element;
    const formData = new FormData(e.target as HTMLFormElement);

    e.preventDefault();

    const result: {
      result: string;
      msg: string;
    } = await addToMailchimp(formData.get('email'));

    const htmlPos = result.msg.indexOf('<');
    const msgEnd = htmlPos !== -1 ? htmlPos : result.msg.length;

    setNewsletterMesage(result.msg.substring(0, msgEnd));

    const input = formElement?.querySelector('input');

    if (input) {
      input.value = '';
    }
  };

  return (
    <div className={b()}>
      <Content flex>
        <div className={b('content')}>
          <Headline size={1} text="Hike and clean your planet" wrap>
            Hike and<br />
            <span className={b('highlight')}>clean</span><br />
            your planet
          </Headline>
          <Paragraph>
            Pollution is an ongoing problem we can only solve together. By picking up some
            trash on your hikes you can do your part and for this we want to thank you.
          </Paragraph>
          <form className={b('newsletter')} onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email address" />
            <Button text="Get early access" color="primary" depth={false} isLarge isSubmit />
          </form>
          {
            newsletterMessage
              ? <p className={b('newsletter-message')}>{newsletterMessage}</p>
              : (
                <div className={b('newsletter-hint')}>
                  By clicking on "Get early access", you acknowledge that your information will be
                  transferred to Mailchimp for processing.
                  <OutboundLink href="https://mailchimp.com/legal/" target="_blank" rel="noopener">
                    Learn more about Mailchimp's privacy practices here.
                  </OutboundLink>
                </div>
              )
          }
        </div>
        <div className={b('image')}>
          <Image src={hikingImage} alt="Two people hiking" />
        </div>
      </Content>
      <Link className={b('scroll')} to="/#features">
        <FiChevronDown size={36} />
      </Link>
    </div>
  );
};

export default IndexHead;
