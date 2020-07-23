import React from 'react';

import Link from 'atoms/Link';
import SEO from 'seo';

import Paragraph from 'atoms/Paragraph';
import TextLayout from 'templates/TextLayout';

const ImprintPage = (): JSX.Element => (
  <TextLayout title="Imprint">
    <SEO
      title="Imprint"
      description="Here you can find the imprint information of maternavis UG (haftungsbeschränkt)"
    />
    <Paragraph>All the legal documents governing the services provided by maternavis are collected here.</Paragraph>
    <Paragraph>Information according to section 5 TMG (German Telemedia Act):</Paragraph>
    <Paragraph>
      maternavis UG (haftungsbeschränkt)<br />
      Moltkestraße 102<br />
      47058 Duisburg<br />
      Germany
    </Paragraph>

    <Paragraph>
      Represented by:<br />
      Giovanni Cascio
    </Paragraph>

    <Paragraph>
      Contact:<br />
      Email: info(at)uphike.org
    </Paragraph>

    <Paragraph>
      Register:<br />
      Amtsgericht Duisburg HRB 32681
    </Paragraph>

    <Paragraph>
      <Link
        to="https://ec.europa.eu/consumers/odr/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Here is the link
      </Link>
      {' '}
      to the platform of the European Commission according to Regulation on consumer Online Dispute Resolution.
      Maternavis does currently not use the Online Dispute Resolution platform for any complaints.
    </Paragraph>
  </TextLayout>
);

export default ImprintPage;
