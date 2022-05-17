/**
 * 默认连接符集合
 */
const DEFAULT_SEPARATOR = '[-_\\s]'

/**
 * 连接内容正则表达式生成函数
 */
const separatorGetter = (separator: string) =>
  new RegExp(`(${separator})+([a-zA-Z])`, 'g')

/**
 * 对象属性驼峰化函数
 *
 * 默认支持的连字符：[-_\s]
 * @param map 原始对象
 */
export function camelize<M extends Record<string, any>>(map: M): M
/**
 * 对象属性驼峰化函数（允许自定义连字符）
 *
 * @param map 原始对象
 * @param separator 需要替换的连字符正则表达式，例如 '[-_\\s\.+]'
 */
export function camelize<M extends Record<string, any>>(
  map: M,
  separator: string
): M
export function camelize<M extends Record<string, any>>(
  map: M,
  separator?: string
): M {
  const finalSeparator = separator || DEFAULT_SEPARATOR
  const separatorRegex = separatorGetter(finalSeparator)

  return Object.keys(map).reduce<M>((camelizeMap, originKey) => {
    const camelizeKey = originKey.replace(
      separatorRegex,
      (subStr: string, arg1: string, arg2: string) => {
        return (arg2 || '').toLocaleUpperCase()
      }
    )

    return {
      ...camelizeMap,
      [camelizeKey]: map[originKey]
    }
  }, {} as M)
}
