const path = require("path");

const htmlwebpackplugin = require("html-webpack-plugin");
require("babel-register");

module.exports = {
  entry: ["@babel/polyfill", "./src/apps.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  Plugins: [
    new htmlwebpackplugin({
      template: "./index.html"
    })
  ],
  mode: "development",
  devtool: "inline-source-map",
  devserver: {
    open: true,
    contentBase: "./dist",
  },
};
