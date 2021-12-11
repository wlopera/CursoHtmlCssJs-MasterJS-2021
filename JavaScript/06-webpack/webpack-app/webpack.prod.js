const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Modo Producccion

  output: {
    clean: true,
    filename: "main.[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.style.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.style.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // Conservar la informacion ctuales del HTML
      title: "Mi Webpack APP",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
  ],
};
