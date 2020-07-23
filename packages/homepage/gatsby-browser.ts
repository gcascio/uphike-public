/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { init } from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import 'normalize.css/normalize.css';

export const shouldUpdateScroll = ({
  routerProps: { location },
}) => {
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth' });
    }, 100);

    return false;
  }
  return true;
};


export const onClientEntry = () => {
  if (process.env.SENTRY_DEBUG === 'true' || process.env.NODE_ENV === 'production') {
    init({
      debug: process.env.SENTRY_DEBUG === 'true',
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT,
      release: process.env.SENTRY_ENVIRONMENT !== 'development'
        ? `${process.env.SENTRY_ORG}_${process.env.SENTRY_PROJECT}@${process.env.VERSION}`
        : undefined,
      integrations: [
        new Integrations.CaptureConsole({
          levels: ['error'],
        }),
      ],
    });
  }
};
