# js-utils

JavaScript常用工具集，按功能分类封装实用的工具。

## 安装

```sh
npm install --save @cesarlai/js-utils
```

## 提供的函数

- transform
  - camelize() - 对象驼峰化函数

## 用法演示

### transform

#### camelize

将对象的属性驼峰化。

```ts
import { camelize } from '@cesarlai/js-utils' 

const origin = {
  'aaa-bbb': '123',
  'ccc_ddd': 123,
  'hhhhhh_ell-o world': 1024,
  goodCode: true,
  none: undefined,
  null: null
}

camelize(origin)
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
import { camelize } from '@cesarlai/js-utils'

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

camelize(origin, '[\\.\\-\\_\\+]')
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
