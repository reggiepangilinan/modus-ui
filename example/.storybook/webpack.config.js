// module.exports = _base => {
//     _base.config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       use: [
//         {
//           loader: require.resolve('babel-loader'),
//           options: {
//             presets: [require.resolve('babel-preset-react-app')]
//           }
//         },
//         require.resolve('react-docgen-typescript-loader')
//       ]
//     });
//     _base.config.resolve.extensions.push('.ts', '.tsx');
//     return _base.config;
//   };
