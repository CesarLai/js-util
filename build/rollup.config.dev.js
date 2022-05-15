import rollupReplace from '@rollup/plugin-replace'
import baseRollupConfig from './rollup.config.base'
import mergeConfig from './utils/mergeConfig'

export default mergeConfig(baseRollupConfig, {
  input: 'src/index.ts',
  plugins: [
    rollupReplace({
      preventAssignment: true,
      'process.env.NODE_ENV': 'development'
    })
  ],
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**']
  }
})
