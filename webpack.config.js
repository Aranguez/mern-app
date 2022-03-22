/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "src/frontend/public/index.html",
  }),
  new LiveReloadPlugin(),
  new MiniCssExtractPlugin(),
];

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, "./src/frontend/index.js"),
  mode,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.png|svg|jpe?g|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },
};
