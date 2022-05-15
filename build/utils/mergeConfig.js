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
    plugins: [...(baseConfig.plugins || []), ...(nextConfig.plugins || [])],
    external: [...(baseConfig.external || []), ...(nextConfig.external || [])]
  }
  return merged
}

export default mergeConfig
