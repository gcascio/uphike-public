import React from 'react';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
interface OnRenderBodyProps {
  setHeadComponents: (props: JSX.Element[]) => void;
}

export const onRenderBody = ({ setHeadComponents }: OnRenderBodyProps): void => {
  // If no Google Analytics cookie is set the tracking should be disabled
  const renderHtml = `
    var disableStr = 'ga-disable-${process.env.GA_MEASUREMENT_ID_HOMEPAGE}';
    if (document.cookie.indexOf(disableStr) === -1) {
      window[disableStr] = true;
    }
  `;

  return setHeadComponents([
    <script
      key="gatsby-plugin-google-gtag-disable-default"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: renderHtml }}
    />,
  ]);
};
