const path = require("path");

const babelOptions = require("./babel.config.js");

module.exports = {
  entry: "./src/index.tsx",
  target: "node",
  externalsPresets: { node: true },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: "babel-loader",
          options: babelOptions,
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "access-it",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
