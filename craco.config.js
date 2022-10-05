const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@api': resolvePath('./src/api'),
      '@constants': resolvePath('./src/constants'),
      '@enums': resolvePath('./src/enums'),
      '@hooks': resolvePath('./src/hooks'),
    },
  },
}
