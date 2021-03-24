const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
    }],
  },

  devServer: {
    open: true,
    host: 'localhost',
    contentBase: './dist',
  },

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};