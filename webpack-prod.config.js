const path = require('path');
// const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//css

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CompressionPlugin = require('compression-webpack-plugin');

var ImageminPlugin = require('imagemin-webpack-plugin').default;

const imageminMozjpeg = require('imagemin-mozjpeg');

var BrotliPlugin = require('brotli-webpack-plugin');

var OfflinePlugin = require('offline-plugin');

var cssConfig = require('./buildTasks/css-optimization.js');

var imageOptimizationConfig = require('./buildTasks/image-optimization.js');

var htmlOptimizationConfig = require('./buildTasks/html-optimization.js');

var fontOptimizationConfig = require('./buildTasks/fonts-optimization.js');

var scriptsOptimizationConfig = require('./buildTasks/scripts-optimization.js');

module.exports = {
  mode: 'production',
  devServer: {
    port: 4300,
    open: true,
    contentBase: './public',
    publicPath: '/',
    historyApiFallback: true,
  },
  context: __dirname,
  entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   vendor: ['react', 'react-dom', 'react-router'],
  // },
  module: {
    rules: [...scriptsOptimizationConfig.rules, ...cssConfig.rules, ...imageOptimizationConfig.rules, ...fontOptimizationConfig.rules],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@fonts-exporter': path.join(__dirname + '/src/fonts'),
      '@components': path.join(__dirname + '/src/components'),
    },
  },
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...scriptsOptimizationConfig.plugins,
    ...cssConfig.plugins,
    ...imageOptimizationConfig.plugins,
    ...htmlOptimizationConfig.plugins,
    new CompressionPlugin(),
    new CopyWebpackPlugin({
      patterns: [{from: 'public/_redirects', to: path.resolve(__dirname, 'dist/')}],
    }),
    // new BundleAnalyzerPlugin(),
  ],
  performance: {
    maxEntrypointSize: 100000,
    hints: 'warning',
  },
  optimization: {
    nodeEnv: 'production',
    splitChunks: {chunks: 'all'},
    minimize: true,
    minimizer: [...cssConfig.minimizer, ...scriptsOptimizationConfig.minimizer],
  },
};

/**
 * Below commented lines are kept for references and will be deleted during the clean up activities.
 */
// concatenateModules: true, disabling to anlayse using webpack bundle analyser
// new ImageminPlugin(),
// new ImageminPlugin({
//   pngquant: {
//     disable: false,
//     quality: '50-60',
//   },
//   plugins: [imageminMozjpeg({quality: 90})],
// }),
// new OfflinePlugin({
//   AppCache: false,
//   ServiceWorker: {events: true},
// }),

// new BrotliPlugin({
//   asset: '[path].br[query]',
//   test: /\.(js|css|html|svg)$/,
//   threshold: 10240,
//   minRatio: 0.8,
// }),
// new webpack.optimize.ModuleConcatenationPlugin(),// new webpack.optimize.ModuleConcatenationPlugin(),
// new webpack.optimize.DedupePlugin(), //dedupe similar code
// new webpack.optimize.UglifyJsPlugin(), //minify everything
// new webpack.optimize.AggressiveMergingPlugin(), //Merge chunkss
// new BundleAnalyzerPlugin(),

// {
//   test: /\.(jpe?g|png|gif|svg)$/,
//   // use: ['file-loader'],
//   use: [
//     {
//       loader: 'file-loader',
//       options: {
//         outputPath: 'images',
//       },
//     },
//   ],
// },
// {
//   test: /\.(jpe?g|png|gif|svg)$/,
//   loader: 'image-webpack-loader',
//   // This will apply the loader before the other ones
//   enforce: 'pre',
// },
// {
//   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//   use: [
//     {
//       loader: 'file-loader',
//       options: {
//         name: '[name].[ext]',
//         outputPath: 'fonts/',
//       },
//     },
//   ],
// },

// nodeEnv: 'production',
// concatenateModules: true, disabling to anlayse using webpack bundle analyser
// splitChunks: {chunks: 'all'},
// ...scriptsOptimizationConfig.optimization,
// minimizer: [
//   ...cssConfig.minimizer,
//   // new TerserPlugin({}),
//   // new OptimizeCssAssetsPlugin({
//   //   cssProcessorOptions: {
//   //     map: {
//   //       inline: false,
//   //       annotation: true,
//   //     },
//   //   },
//   // }),
//   // new OptimizeCssAssetsPlugin({
//   //   cssProcessorOptions: {
//   //     // map: {
//   //     //   inline: false,
//   //     //   annotation: true,
//   //     // },
//   //   },
//   // }),
//   // new TerserPlugin({
//   //   test: /\.js(\?.*)?$/i,
//   // }),
// ],
