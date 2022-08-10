import {defineConfig} from 'rollup'
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';


export default defineConfig({
  input: ['src/index.tsx'],
  plugins: [
    commonjs(),
    typescript(),
    resolve(),
  ],
  output: {
    format:'umd',
    // dir: 'dist',
    name: 'SeatReact',
    file: 'dist/index.js'
  },
  external: [
    'react',
    'seat-core'
  ]
})