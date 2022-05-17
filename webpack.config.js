const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 합쳐질 파일 요소들 입력
  entry: {
    app: ['./src/index.jsx'],
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['ts-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // 최종적으로 만들어질 js
  output: {
    path: path.join(__dirname, '/dist'), //빌드 위치
    filename: 'bundle.js', //웹팩 빌드 후 최종적으로 만들어질 파일
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: false,
    }),
  ],
};
