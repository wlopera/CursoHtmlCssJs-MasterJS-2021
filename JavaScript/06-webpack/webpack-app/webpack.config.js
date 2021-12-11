const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // Modo desarrollo

  output: {
    clean: true,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // Conservar la informacion ctuales del HTML
      title: "Mi Webpack APP",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
