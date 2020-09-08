const ImageminPlugin = require('imagemin-webpack-plugin').default;

const imageOptimizationConfig = {
  rules: [
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'image-webpack-loader',
      enforce: 'pre', // This will apply the loader before the other ones
      options: {
        optipng: {
          enabled: true,
        },
      },
    },
  ],
  plugins: [
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '99',
      },
    }),
  ],
};

module.exports = imageOptimizationConfig;
