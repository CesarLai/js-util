declare namespace JsUtils {
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
}

export = JsUtils
