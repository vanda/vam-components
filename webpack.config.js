const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    vamModal : './src/components/vam-modal/index.js'
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'V&amp;A Custom Elements',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
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
