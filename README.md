# jslib

A javascript lib that provide a lot of utils, built with rollup.

## Getting Started

installtion

```sh
npm install --save @cesarlai/jslib
```

## API

- regex
  - isHttp() - validate a string is valid http url or not
  - parseHttpUrl() - parse http url to an object
- transform
  - camelize() - transform all the object keys to camelcase style

## Usage

### Regex Module

#### isHttp

validate a string is valid http url or not

```ts
import { RegexUtil } from '@cesarlai/jslib'

RegexUtil.isHttpUrl(
  'https://cloud.platform.com/login?s_url=https%3A%2F%2Fconsole.cloud.platform.com%2Fservicemarket/'
) // true
RegexUtil.isHttpUrl('https://github.com') // true
RegexUtil.isHttpUrl(
  'http://code.visualstudio.com/docs/editor/debugging#_start-debugging'
) // true
RegexUtil.isHttpUrl('wss://broadcast.chat.stream.com:7826/sub?platform=web') // false
RegexUtil.isHttpUrl(
  'https://i0.stream.com/bfs/live/e791556706f88d88b4846a61a583b31db007f83d.wasm'
) // true
```

#### parseHttpUrl

parse http url to an object

```ts
import { RegexUtil } from '@cesarlai/jslib'

const result = RegexUtil.parseHttpUrl(
  'https://cloud.platform.com/login?s_url=https%3A%2F%2Fconsole.cloud.platform.com%2Fservicemarket/'
)
// result
// {
//   protocol: 'https',
//   host: 'cloud.platform.com',
//   port: undefined,
//   path: '/login',
//   query: {
//     s_url: 'https://console.cloud.platform.com/servicemarket/'
//   },
//   id: undefined
// }

const result = RegexUtil.parseHttpUrl(
  'http://code.visualstudio.com/docs/editor/debugging#_start-debugging/'
)
// result
// {
//   protocol: 'http',
//   host: 'code.visualstudio.com',
//   port: undefined,
//   path: '/docs/editor/debugging',
//   query: undefined,
//   id: '#_start-debugging'
// }
```

### Transform Module

#### camelize

transform all the object keys to camelcase style

```ts
import { TransformUtil } from '@cesarlai/jslib'

const origin = {
  'aaa-bbb': '123',
  ccc_ddd: 123,
  'hhhhhh_ell-o world': 1024,
  goodCode: true,
  none: undefined,
  null: null
}

TransformUtil.camelize(origin)
// result
// {
//   aaaBbb: '123',
//   cccDdd: 123,
//   hhhhhhEllOWorld: 1024,
//   goodCode: true,
//   none: undefined,
//   null: null
// }
```

custom the separators that should be replaced

```ts
import { TransformUtil } from '@cesarlai/jslib'

const origin = {
  'aaa-bbb': '123',
  ccc_ddd: 123,
  'hhhhhh_ell-o world': 1024,
  goodCode: true,
  none: undefined,
  null: null,
  'plus+plus': 'plusPlus',
  'java.script.good': 'javaScriptGood'
}

TransformUtil.camelize(origin, '[\\.\\-\\_\\+]')
// result
// {
//   'aaa-bbb': '123',
//   cccDdd: 123,
//   'hhhhhhEll-o world': 1024, // 存在空格，没有转换
//   goodCode: true,
//   none: undefined,
//   null: null,
//   plusPlus: 'plusPlus',
//   javaScriptGood: 'javaScriptGood'
// }
```
