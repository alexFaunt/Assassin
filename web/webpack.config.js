const path = require('path')

const config = {
  target: 'web',
  entry: {
    index: '../index.web.js'
  },
  output: {
    path: path.join(__dirname, './build'),
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
    extensions: ['.js']
  },
  // watch: !!process.env.WATCH,
  devtool: 'eval-source-map',
  plugins: [
  ]
}

module.exports = config
