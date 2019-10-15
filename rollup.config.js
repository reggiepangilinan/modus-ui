import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import pkg from './package.json'

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
]
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
]

export default [
  {
    input: 'src/index.tsx',
    output: outputConfig(pkg.main, pkg.module),
    plugins: pluginsConfig
  }
  // ,
  // {
  //   input: 'src/components/card/index.tsx',
  //   output: outputConfig('dist/components/card/index.js', 'dist/components/card/index.es.js'),
  //   plugins: pluginsConfig
  // }
]
