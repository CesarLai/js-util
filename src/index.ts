import path from 'path'
import fs from 'fs'

const pkgPath = path.resolve(__dirname, '../package.json')
console.log(fs.readFileSync(pkgPath).toString('utf-8'))
