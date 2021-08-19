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
  entry:  [ './src/gqall.js',
          ],
  output: {
    filename: 'gqall-lib.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
