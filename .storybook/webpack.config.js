const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, '../src'),
      loader: 'awesome-typescript-loader'
    },
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, '../'),
      loader: 'react-docgen-typescript-loader'
    }
  );

  // To debug return the altered config
  // console.log(config);
  return config;
};
