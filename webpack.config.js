const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = [
  "course-description",
  "dashboard",
  "schedule",
  "exercise",
  "theory",
];

const htmlWebpackPlugins = pages.map((page) => {
  return new HtmlWebpackPlugin({
    filename: `./pages/${page}.html`,
    chunks: [page],
    template: `./src/pages/${page}.html`,
  });
});

module.exports = {
  mode: "development",
  entry: {
    "course-description": "./src/scripts/index.js",
    dashboard: "./src/scripts/dashboard.js",
    schedule: "./src/scripts/schedule.js",
    exercise: "./src/scripts/exercise.js",
    theory: "./src/scripts/theory.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "src/public/*"),
        ],
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    ...htmlWebpackPlugins,
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      chunks: ["course-description"],
      template: `./src/pages/course-description.html`,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8000,
  },
};
