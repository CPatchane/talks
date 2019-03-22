module.exports = {
  entry: "./index.js",
  output: { filename: "bundle.js" },
  mode: "development",
  devtool: "none",
  module: {
    rules: [
      { test: /\.yaml$/, loaders: ["json-loader", "yaml-loader"] },
      { test: /\.css$/, loaders: ["css-loader"] },
      { test: /\.png$/, loaders: ["file-loader"] },
    ]
  }
};
