import * as e from "express";
import * as path from "path";
import * as opn from "opn";
import * as webpack from "webpack";
import config from "../webpack.config.dev";

import {User} from "../src/api/userApi";

const port: number = 1337;
const app: e.Express= e();
const compiler: webpack.compiler.Compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error: e.Errback) => {
  if(error) {
    console.log(error);
  }else {
    opn(`http://localhost:${port}`);
  }
});
