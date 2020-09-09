const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
  plugins: [],
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],
};

// for later ref:
// terserOptions: {
//   extractComments: true,
//   ecma: undefined,
//   warnings: false,
//   parse: {},
//   compress: {},
//   mangle: true, // Note `mangle.properties` is `false` by default.
//   module: false,
//   output: {
//     comments: true,
//   },
//   toplevel: false,
//   nameCache: null,
//   ie8: false,
//   keep_classnames: undefined,
//   keep_fnames: false,
//   safari10: false,
// },
