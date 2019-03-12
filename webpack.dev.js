const merge = require("webpack-merge");
const path = require("path");

const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  module: {
    rules: []
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
});
