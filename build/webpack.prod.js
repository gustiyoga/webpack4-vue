const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      // filename: 'css/[name].[chunkhash].css',
      // chunkFilename: 'css/[id].[chunkhash].css',
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      disable: false,
      allChunks: true,
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
        map: {inline: false},
        sourcemap: false,
      },
    }),
  ]
});
