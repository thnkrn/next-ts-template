const withPlugins = require('next-compose-plugins')
const nextPlugins = []

if (process.env.ANALYZE === 'true') {
  nextPlugins.push(
    require('@next/bundle-analyzer')({
      enabled: true,
    })
  )
}

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    const isNotDevMode = !dev
    const { CompiledExtractPlugin } = require('@compiled/webpack-loader')

    // NOTE: Ideal plan is to only extract css on prod build, but is blocked by an issue. (https://github.com/atlassian-labs/compiled/issues/388)
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [{ loader: '@compiled/webpack-loader', options: { extract: true } }],
    })
    config.plugins.push(new CompiledExtractPlugin())

    if (isNotDevMode) {
      if (!isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
        })

        // Ref: https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts
        config.optimization.splitChunks.cacheGroups.framework.test = /(?<!node_modules.*)[/\\]node_modules[/\\](preact\/compat)[/\\]/
      }
    }

    return config
  },
}

module.exports = withPlugins(nextPlugins, nextConfig)
