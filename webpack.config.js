const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = (env) => {
  const isDev = env.MODE === 'development';
  const publicPath = isDev ? '/' : '/galko/';
  const productionPlugins = isDev
    ? []
    : [
        new WebpackPwaManifest({
          name: 'Galko',
          short_name: 'Galko',
          description: 'Galko is Matching pairs card game.',
          background_color: '#ffffff',
          theme_color: '#fdd87f',
          crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
          icons: [
            {
              src: path.resolve('public/favicon.png'),
              destination: path.join('icons'),
              sizes: [32, 96, 128, 192, 256, 384, 512]
            }
          ]
        }),
        new WorkboxPlugin.GenerateSW({
          swDest: path.resolve('dist', 'sw.js'),
          clientsClaim: true,
          skipWaiting: true
        })
      ];

  return {
    mode: env.MODE,
    entry: './src/index.ts',
    devtool: isDev ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
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
              attributes: false,
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
      modules: [path.resolve('./node_modules')],
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
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
      }),
      ...productionPlugins
    ]
  };
};
