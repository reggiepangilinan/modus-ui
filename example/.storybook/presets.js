// const path = require('path');

// module.exports = [
//   //   {
//   //     name: "@storybook/preset-create-react-app",
//   //     // scriptsPackageName: "modus-ui",
//   //     // options: {
//   //     //   tsDocgenLoaderOptions: {
//   //     //     tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
//   //     //   }
//   //     // }
//   //   }
//   //   ,
//   {
//     name: '@storybook/addon-docs/react/preset'
//     // options: {
//     //   configureJSX: true
//     // }
//   }
// ];

const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-create-react-app',
    scriptsPackageName: 'modus-ui'
    // options: {
    //   tsDocgenLoaderOptions: {
    //     tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
    //   }
    // }
  },
  '@storybook/addon-docs/react/preset'
];
