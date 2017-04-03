const path = require('path')

const config = {
  target: 'web',
  entry: {
    index: path.join(__dirname, '../index.web.js')
  },
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/assets/js/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
  ]
}

if (process.env.DEV) {
  Object.assign(config, {
    devServer: {
      proxy: {
        '/': 'http://localhost:3000'
      }
    },
    watch: true,
    devtool: 'eval-source-map'
  })
}

module.exports = config
