const REGEX_HTTP =
  /^(http[s]?):\/\/((?:[\w-]+\.)+[\w-]+)(:\d+)?((?:\/[^?#]*)*)?(?:\?((?:[^=&]+=[^=&]*&?)*))?(#\S*)?/

export interface ParsedHttp {
  protocol: string
  host: string
  path: string
  id?: string
  query?: Record<string, string>
  port?: number
}

/**
 * 判断文本是否为HTTP(S) URL
 * @param url 待解析文本
 */
export const isHttpUrl = (url: string): boolean => REGEX_HTTP.test(url)

/**
 * 将HTTP(S) URL解析为对象，若本文不是合法的URL，返回null
 * @param url 待解析文本
 */
export const parseHttpUrl = (url: string): ParsedHttp | null => {
  const encodedUrl = encodeURI(url)
  const result = new RegExp(REGEX_HTTP).exec(encodedUrl)
  if (!result) {
    return null
  }

  const [matched, protocol, host, port, path, querystring, id] = result.map(
    (item) => (typeof item === 'string' ? decodeURI(item) : item)
  )

  const query =
    typeof querystring === 'string'
      ? querystring.split('&').reduce<Record<string, string>>((prev, curr) => {
          const pair = curr.split('=')
          const key = decodeURIComponent(pair[0] || '')
          const value = decodeURIComponent(pair[1] || '')

          return {
            ...prev,
            [key]: value
          }
        }, {})
      : undefined

  return {
    protocol,
    host,
    port: typeof port === 'string' ? Number.parseInt(port, 10) : undefined,
    path,
    query,
    id
  }
}
