const { resolve: _resolve, join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    content: _resolve(__dirname, '..', 'src', 'content.ts'),
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false,
  plugins: [
    // CleanWebpackPlugin with --watch option repeats the build.
    !isDev && new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: '.', to: '.', context: 'public', noErrorOnMissing: true },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};
