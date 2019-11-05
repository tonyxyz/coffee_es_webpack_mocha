const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: "inline-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/u,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.coffee$/u,
        use: [
          {
            loader: 'coffee-loader',
            options: {
              transpile: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    ]
  }
};
