import path from 'path'
import rollupJson from '@rollup/plugin-json'
import {
  babel as rollupBabel,
  getBabelOutputPlugin
} from '@rollup/plugin-babel'
import { nodeResolve as rollupNodeResolve } from '@rollup/plugin-node-resolve'
import rollupEslint from '@rollup/plugin-eslint'
import { terser as rollupTerser } from 'rollup-plugin-terser'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import packageJson from '../package.json'

const ROOT_PATH = path.resolve(__dirname, '../')

export default {
  plugins: [
    rollupNodeResolve({ preferBuiltins: false }),
    rollupJson(),
    rollupBabel({
      configFile: path.resolve(ROOT_PATH, '.babelrc'),
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.json']
    }),
    getBabelOutputPlugin({
      allowAllFormats: true,
      configFile: path.resolve(ROOT_PATH, '.babelrc'),
      runtimeHelpers: true
    }),
    rollupEslint(),
    rollupTerser()
  ],
  external: ['fs', 'path'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ]
}
