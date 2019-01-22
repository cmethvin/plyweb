/* global __dirname */

const app = 'plywood'

var webpack = require('webpack')
var path = require('path')

var paths = {}
paths.node = path.join(__dirname, 'node_modules')
paths.source = path.join(__dirname, 'src')
paths.server = path.join(__dirname, 'server')
paths.output = path.join(__dirname, 'docs/scripts')

module.exports = {
  context: paths.source,
  entry: 'ui',
  output: {
    filename: app + '-ui.js',
    path: paths.output
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [paths.source, paths.node]
  },
  resolveLoader: {
    modules: [paths.node]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  devServer: {
    port: 8000,
    contentBase: paths.server,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [paths.source],
        use: ['babel-loader']
      }, {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(html|gif|jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 65536,
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
