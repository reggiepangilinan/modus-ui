import svgr from '@svgr/rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';

import pkg from './package.json';

const pluginsConfig = [
  external(),
  scss(),
  postcss({
    modules: true
  }),
  url(),
  svgr(),
  resolve(),
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true
  }),
  commonjs()
];
const outputConfig = (main, module) => [
  {
    file: main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true
  },
  {
    file: module,
    format: 'es',
    exports: 'named',
    sourcemap: true
  }
];

export default [
  {
    input: 'src/index.tsx',
    output: outputConfig(pkg.main, pkg.module),
    plugins: pluginsConfig
  }
];
