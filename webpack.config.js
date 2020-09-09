const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.s?css$/,
        use: [
          'style-loader', // Creates `style` nodes from JS stringss
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        // use: ['file-loader'],
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      // 'react-circular-progressbar-css': path.join(__dirname, '/node_modules/react-circular-progressbar/dist/styles.css'),
      '@fonts-exporter': path.join(__dirname + '/src/fonts'),
      '@components': path.join(__dirname + '/src/components'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    // contentBase: './public',
    // publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],
  // optimization: {
  //   splitChunks: {chunks: 'all'},
  // },
};

module.exports = config;
