const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  experimental: {
    staticPageGenerationTimeout: 300
  }
}
