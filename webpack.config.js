const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const sourceDirectory = path.resolve(__dirname, 'src');
const outputDirectory = path.resolve(__dirname, 'dist');


module.exports = {
  entry: `${sourceDirectory}/index.jsx`,
  output: {
    path: outputDirectory,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
/*       {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }, */
/*      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }*/
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${sourceDirectory}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
