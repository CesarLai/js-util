import path from 'path'
import rollupTypescript from '@rollup/plugin-typescript'
import rollupJson from '@rollup/plugin-json'
import { babel as rollupBabel } from '@rollup/plugin-babel'
import { nodeResolve as rollupNodeResolve } from '@rollup/plugin-node-resolve'
import rollupEslint from '@rollup/plugin-eslint'
import { terser as rollupTerser } from 'rollup-plugin-terser'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const ROOT_PATH = path.resolve(__dirname, '../')

export default {
  plugins: [
    rollupNodeResolve({ preferBuiltins: false }),
    rollupJson(),
    rollupTypescript({ tsconfig: path.resolve(ROOT_PATH, 'tsconfig.json') }),
    rollupBabel({
      configFile: path.resolve(ROOT_PATH, '.babelrc'),
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.json']
    }),
    rollupEslint(),
    rollupTerser()
  ],
  external: ['fs', 'path'],
  output: [
    {
      dir: path.resolve(ROOT_PATH, 'dist'),
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: path.resolve(ROOT_PATH, 'dist'),
      format: 'esm',
      sourcemap: true
    }
  ]
}
