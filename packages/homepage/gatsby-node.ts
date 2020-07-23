/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import constants from '@uphike/constants';

// TODO: import correct types from webpack
interface OnCreateWebpackConfigProps {
  plugins: {
    define: (props: {}) => unknown;
  };
  actions: {
    setWebpackConfig: (props: {}) => void;
  };
}

export const onCreateWebpackConfig = ({
  plugins,
  actions,
}: OnCreateWebpackConfigProps): void => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.BASE_URL': JSON.stringify(constants.protocols.HTTP.concat(process.env.DOMAIN || '')),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '*.scss'],
    },
  });
};
