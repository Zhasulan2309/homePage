const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const repoName = "homePage";

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "js/[name].[contenthash:8].js" : "js/bundle.js",
      clean: true,
      publicPath: isProd ? `/${repoName}/` : "/", // ← ВОТ ЭТО
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: { "@": path.resolve(__dirname, "src") },
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: "asset/resource",
          generator: { filename: "assets/[name].[hash:8][ext]" },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: { filename: "fonts/[name].[hash:8][ext]" },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    devtool: isProd ? "source-map" : "eval-source-map",
    devServer: {
      static: { directory: path.resolve(__dirname, "public") },
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },
  };
};
