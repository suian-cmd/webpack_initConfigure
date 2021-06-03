const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    // mode: "development", // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',    //长效缓存
        // filename: 'foo.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
      //设置打包生成的index.html文件的标题
      title: 'Sui An',
      //设置打包生成的index.html的模板
      template: 'src/assets/test.html'
    })
  ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.styl$/,
          loader: ["style-loader", "css-loader", "stylus-loader"]
        },
        {
          test: /\.less$/,
          loader: ["style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("dart-sass")
              }
            }
          ]
        }
      ]
    },
};