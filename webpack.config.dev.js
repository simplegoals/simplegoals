const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'playground'),
    filename: 'simplegoals.js',
    library: 'SimpleGoals',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "simplegoals.css"
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: false
          }
        }
      ],
    }]
  },
};