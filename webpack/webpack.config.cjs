const { resolve: _resolve, join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    background: _resolve(__dirname, '..', 'src', 'background.ts'),
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
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: '.', to: '.', context: 'public', noErrorOnMissing: true },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};
