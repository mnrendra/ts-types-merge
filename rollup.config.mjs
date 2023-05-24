import { readFileSync } from 'node:fs'
import dts from 'rollup-plugin-dts'

const { types } = JSON.parse(
  readFileSync(`${process.cwd()}/package.json`, { encoding: 'utf-8' })
)

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id)
})

export default [
  bundle({
    plugins: [dts()],
    output: {
      file: types,
      format: 'es'
    }
  })
]
