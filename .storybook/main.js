const path = require('path')
const LWCWebpackPlugin = require('lwc-webpack-plugin')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: ['../ui/modules/**/*.stories.js'],
  addons: ['@storybook/addon-docs/register'],

  webpackFinal: config => {
    config.plugins.push(
      new LWCWebpackPlugin({
        namespace: {
          // LWC Namespace with path
          c: path.resolve('./ui/modules')
        },
        modules: ['@salesforce-ux/design-system']
      })
    )

    config.module.rules = [
      {
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre'
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-react-jsx']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [/ui\/shared\//],
        use: ['style-loader', 'css-loader']
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
