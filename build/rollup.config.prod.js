import path from 'path'
import rollupTypescript from '@rollup/plugin-typescript'
import rollupReplace from '@rollup/plugin-replace'
import baseRollupConfig from './rollup.config.base'
import mergeConfig from './utils/mergeConfig'

const ROOT_PATH = path.resolve(__dirname, '../')

export default mergeConfig(baseRollupConfig, {
  input: 'src/index.ts',
  plugins: [
    rollupTypescript({
      declaration: true,
      declarationDir: '.',
      tsconfig: path.resolve(ROOT_PATH, 'tsconfig.json')
    }),
    rollupReplace({
      preventAssignment: true,
      'process.env.NODE_ENV': 'production'
    })
  ]
})
