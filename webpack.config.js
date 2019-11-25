const path = require('path');
const minimize = process.argv.indexOf('--minimize') !== -1;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `simplegoals${minimize ? '.min' : ''}.js`,
    library: 'SimpleGoals',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    minimize: minimize
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `simplegoals${minimize ? '.min' : ''}.css`
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
};