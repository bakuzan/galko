const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isDev = env.MODE === 'development';
  const publicPath = isDev ? '/' : '/galko/';

  return {
    mode: env.MODE,
    entry: './src/index.ts',
    devtool: isDev ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: false,
              minimize: !isDev
            }
          }
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'string-replace-loader',
            options: {
              multiple: [
                { search: '%PUBLIC_URL%', replace: publicPath, flags: 'g' }
              ]
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: 'head',
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: 'public/404.html'
      })
    ]
  };
};
