const path = require('path');

module.exports = {
  // optimization: {
  //   minimize: false
  // },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  entry:  { 'gqall-lib': './src/gqall.js',
            'gqall-lib-apollo': './src/gqall-apollo.js',
          },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
