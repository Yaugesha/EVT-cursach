const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // добавляет стили в DOM при загрузке страницы
          "css-loader", // переводит CSS в модули JavaScript
          "sass-loader", // компилирует Sass в CSS
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
};
