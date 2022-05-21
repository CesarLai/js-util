# js-utils

JavaScript 常用工具集，按功能分类封装实用的工具。

## 安装

```sh
npm install --save @cesarlai/js-utils
```

## 提供的函数

- regex
  - isHttp() - 判断是否为合法的 HTTP 地址
  - parseHttpUrl() - 将 HTTP 地址解析为对象
- transform
  - camelize() - 对象驼峰化函数

## 用法演示

### regex 模块

#### isHttp

判断是否为合法的 HTTP 地址

```ts
import { RegexUtil } from '@cesarlai/js-utils'

RegexUtil.isHttpUrl(
  'https://cloud.platform.com/login?s_url=https%3A%2F%2Fconsole.cloud.platform.com%2Fservicemarket/'
) // true
RegexUtil.isHttpUrl(
  'https://github.com'
) // true
RegexUtil.isHttpUrl(
  'http://code.visualstudio.com/docs/editor/debugging#_start-debugging'
) // true
RegexUtil.isHttpUrl(
  'wss://broadcast.chat.stream.com:7826/sub?platform=web'
) // false
RegexUtil.isHttpUrl(
  "https://i0.stream.com/bfs/live/e791556706f88d88b4846a61a583b31db007f83d.wasm"
) // true
```

#### parseHttpUrl

将 HTTP 地址解析为对象

```ts
import { RegexUtil } from '@cesarlai/js-utils'

const result = RegexUtil.parseHttpUrl(
  'https://cloud.platform.com/login?s_url=https%3A%2F%2Fconsole.cloud.platform.com%2Fservicemarket/'
)
// 结果
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
// 结果
// {
//   protocol: 'http',
//   host: 'code.visualstudio.com',
//   port: undefined,
//   path: '/docs/editor/debugging',
//   query: undefined,
//   id: '#_start-debugging'
// }
```

### transform 模块

#### camelize

将对象的属性驼峰化。

```ts
import { TransformUtil } from '@cesarlai/js-utils'

const origin = {
  'aaa-bbb': '123',
  'ccc_ddd': 123,
  'hhhhhh_ell-o world': 1024,
  goodCode: true,
  none: undefined,
  null: null
}

TransformUtil.camelize(origin)
// 结果
// {
//   aaaBbb: '123',
//   cccDdd: 123,
//   hhhhhhEllOWorld: 1024,
//   goodCode: true,
//   none: undefined,
//   null: null
// }
```

自定义空白符

```ts
import { TransformUtil } from '@cesarlai/js-utils'

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
// 结果
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
