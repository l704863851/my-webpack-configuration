const merge = require("webpack-merge");
const path = require("path");

const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  module: {
    rules: []
  }
});
