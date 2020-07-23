import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import constants from '@uphike/constants';

import favicon from 'images/meta/favicon.png';
import logo from 'images/meta/logo.png';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

interface Props {
  description: string;
  lang?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
  title: string;
  noIndex?: boolean;
}

const SEO = ({
  description,
  lang = 'en',
  meta = [],
  title,
  noIndex = false,
}: Props): JSX.Element => {
  const robotMeta = noIndex ? [{
    name: 'robots',
    content: 'noindex',
  }] : [];

  return (
    <StaticQuery
      query={detailsQuery}
      render={(data): JSX.Element => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.title} - %s`}
            link={[
              {
                rel: 'icon',
                href: favicon,
              },
            ]}
            meta={[
              ...robotMeta,
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image:type',
                content: 'image/png',
              },
              {
                property: 'og:image:width',
                content: 1200,
              },
              {
                property: 'og:image:height',
                content: 1200,
              },
              {
                property: 'og:image:alt',
                content: 'Logo of uphike',
              },
              {
                property: 'og:image',
                content: `${constants.protocols.HTTP}${process.env.DOMAIN}${logo}`,
              },
              {
                property: 'og:image:secure_url',
                content: `https://${process.env.DOMAIN}${logo}`,
              },
              {
                name: 'twitter:image',
                content: `${constants.protocols.HTTP}${process.env.DOMAIN}${logo}`,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(meta)}
          />
        );
      }}
    />
  );
};

export default SEO;
