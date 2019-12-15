const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: prop => {
          //Override IconTypes in Props Table Generated
          if (prop.name === 'type' && prop.type.raw === 'IconTypes') {
            prop.type = { name: 'IconTypes' };
          }
          return true;
        }
      }
    }
  },
  {
    name: '@storybook/addon-docs/preset',
    options: {
      sourceLoaderOptions: true
    }
  }
];
