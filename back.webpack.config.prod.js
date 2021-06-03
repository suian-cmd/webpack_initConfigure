const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
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
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
    module: {
      rules: [
        // 将css插入style标签导入，建议开发环境使用
        // {
        //   //为.css结尾的文件
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"],
        // },
        //以css文件方式导入，即写入link中，建议生产环境使用
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
};