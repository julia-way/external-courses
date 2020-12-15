const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/tasks-management.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9005,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
          use: [
              {
                  loader: "file-loader",
              },
          ],
      },
      ]
    },
    plugins: [new HtmlWebpackPlugin({template: './index.html'})],
};
