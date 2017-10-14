
import * as webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import { red, yellow, green, blue } from "chalk";

process.env.NODE_ENV = "production";

console.log(blue("Webpack running ..."));

webpack(webpackConfig).run((err: any, stats: webpack.Stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(red(err));
    return 1;
  }

  const jsonStats: any = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error:any) => console.log(red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(yellow("Webpack generated the following warnings: "));
    jsonStats.warnings.map((warning: any) => console.log(yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(green("Your app has been built for production and written to /dist!"));

  return 0;
});
