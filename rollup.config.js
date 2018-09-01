import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import riot from 'rollup-plugin-riot';

export default {
  input: 'src/entry.js',
  plugins: [
    riot(),
    nodeResolve({ jsnext: true }),
    commonjs(),
    babel()
  ],
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'RiotFontAwesome',
    globals: {
      'sorted-json-stringify': 'sortedJSONStringify',
      riot: 'riot',
      '@fortawesome/fontawesome-svg-core': 'FontAwesome'
    }
  },
  external: [
    'sorted-json-stringify',
    'riot',
    '@fortawesome/fontawesome-svg-core'
  ]
};
