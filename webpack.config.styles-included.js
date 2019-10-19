const path = require('path');
const minimize = process.argv.indexOf('--minimize') !== -1

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `simplegoals-styles-included${minimize ? '.min' : ''}.js`,
    library: 'SimpleGoals',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: minimize
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
};