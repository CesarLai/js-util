const mergeItems = (base, next) => {
  const baseItems = []
  const nextItems = []

  if (Array.isArray(base)) {
    baseItems.push(...base)
  } else if (typeof base === 'object' && next) {
    baseItems.push(base)
  }

  if (Array.isArray(next)) {
    nextItems.push(...next)
  } else if (typeof next === 'object' && next) {
    nextItems.push(next)
  }

  return baseItems.concat(...nextItems)
}

const mergeConfig = (baseConfig, next) => {
  let nextConfig
  if (typeof next === 'function') {
    nextConfig = next()
  } else {
    nextConfig = next
  }

  const merged = {
    ...baseConfig,
    ...nextConfig,
    plugins: mergeItems(baseConfig.plugins, nextConfig.plugins),
    external: mergeItems(baseConfig.external, nextConfig.external),
    output: mergeItems(baseConfig.output, nextConfig.output)
  }
  return merged
}

export default mergeConfig
