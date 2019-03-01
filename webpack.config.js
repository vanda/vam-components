const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'V&A Custom Elements',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.lit$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                targets: {
                  browsers: [
                    'safari 11'
                  ]
                }
              }]]
            }
          }
        ]
      },
      {
        test: /\.pcss?$/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};
