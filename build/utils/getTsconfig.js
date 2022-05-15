import path from 'path'
import fs from 'fs'

console.log('__dirname', __dirname)
const ROOT_PATH = path.resolve(__dirname, '../')

const getTsconfig = () => {
  const tsConfigContent = fs.readFileSync(
    path.resolve(ROOT_PATH, 'tsconfig.json'),
    {
      encoding: 'utf-8'
    }
  )
  const tsConfig = JSON.parse(tsConfigContent || '{}')
  return tsConfig
}

export default getTsconfig

export { getTsconfig }
