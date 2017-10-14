import * as path from "path";
import { Configuration, optimize } from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";

const config: Configuration = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin("[name].[chunkhash].css"),
    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new optimize.CommonsChunkPlugin({
      name: "vendor"
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    // Minify JS
    new optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/, loader: "source-map-loader", enforce: "pre"
      },
      {
        test: /\.ts$/, loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
};

export default config;
