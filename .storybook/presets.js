const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-typescript'
    // options: {
    //   tsDocgenLoaderOptions: {
    //     tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
    //     shouldExtractLiteralValuesFromEnum: true,
    //     propFilter: prop => {
    //       if (prop.parent) {
    //         return !prop.parent.fileName.includes('node_modules/@types/react/');
    //       }

    //       return true;
    //     }
    //   }
    //}
  },
  {
    name: '@storybook/addon-docs/preset',
    options: {
      sourceLoaderOptions: true
    }
  }
];
