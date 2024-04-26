module.exports = {
  mode: "production",
  entry: "./dist/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: __dirname + "/dist", // Output directory
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile newer JS to older syntax for compatibility
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
