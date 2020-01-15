import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

// use '--environment minify' with rollup
// to minify the input
const minify = process.env.minify || false;

// use "--environment bundle" with rollup
// if you want to make a bundle.
const bundle = process.env.bundle || false;

export default {
  input: 'src/front/app.ts',
  output: {file: 'public/app.js', format: 'esm'},
  plugins:
      [
        bundle ? nodeResolve() : {},
        typescript(),
        minify ? terser() : {},
      ]
};