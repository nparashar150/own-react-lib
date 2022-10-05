const path = require("path");

module.exports = {
  entry: "./babel/babel.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "./js/own-react-bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
