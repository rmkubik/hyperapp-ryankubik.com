const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const OUTPUT_DIR = "./dist";

const plugins = [
  new HtmlWebpackPlugin({
    title: "Ryan Kubik",
    template: "./src/index.prod.html",
    filename: path.join(__dirname, OUTPUT_DIR, "./index.html")
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: "defer"
  }),
  new ExtractTextPlugin({
    filename: "[name].[hash].css",
    allChunks: true
  }),
  new UglifyJsPlugin(),
  new MinifyPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new CopyWebpackPlugin([
    { from: "favicons", to: "" },
    {
      from: "_redirects",
      to: ""
    }
  ])
];

module.exports = () => ({
  entry: ["./src/index.js", "./styles/app.css"],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, OUTPUT_DIR)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "./")]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader?importLoaders=1"
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  plugins
});
