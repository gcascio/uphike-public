/* eslint-disable max-len */
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export default {
  siteMetadata: {
    title: 'uphike',
    description: `
      Experience the new age of remote work and see who is available in real time,
      talk to your colleagues with one single click and collaborate with your whole team at once.
    `,
    author: '@uphike',
    siteUrl: `https://${process.env.DOMAIN}`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        rules: [
          'images', /* Matches Gatsby default rules for images */
          'media', /* Matches Gatsby default rules for media (video/audio) */
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `
          @import "../components/src/styles/index";
          @import "./src/styles/index";
        `,
        cssLoaderOptions: {
          url: false,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/components/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Montserrat:400,600,700,800',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GA_MEASUREMENT_ID_HOMEPAGE,
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: [
          'DOMAIN',
          'GA_MEASUREMENT_ID_HOMEPAGE',
          'SENTRY_DSN',
          'SENTRY_DEBUG',
          'SENTRY_ENVIRONMENT',
        ],
      },
    },
  ],
};
