var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(ttf|eot|woff|woff2|svg|png|jpg)$/, loader: 'url' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}