const path = require('path')
const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = {
  stories: ['../ui/modules/**/*.stories.js'],

  webpackFinal: config => {
    config.plugins.push(
      new LWCWebpackPlugin({
        namespace: {
          // LWC Namespace with path
          c: path.resolve('./ui/modules')
        }
      })
    )

    config.module.rules = [
      {
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre'
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'file-loader/dist/cjs.js',
        query: { name: 'static/media/[name].[hash:8].[ext]' }
      }
    ]

    return config
  }
}
