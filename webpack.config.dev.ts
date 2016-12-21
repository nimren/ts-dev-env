import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  resolve: {
    extensions: ["",".ts", ".js"]
  },
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    //Create HTML file that includes reference to bundeled js
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ],
  module: {
    preLoaders: [
    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
      {test: /\.ts$/, loader: "awesome-typescript-loader"},
      {test: /\.css$/, loaders: ["style","css"]}
    ]
  }
};
