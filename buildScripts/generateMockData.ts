import * as jsf from "json-schema-faker";
import {schema} from "./mockDataSchema";
import * as fs from "fs";
import * as chalk from "chalk";

jsf.resolve(schema).then((sample: string) => {
  const json: string = JSON.stringify(sample);

  fs.writeFile("./src/service/db.json", json, (err: NodeJS.ErrnoException) => {
    if(err){
      return console.log(chalk.red(err.message));
    }else {
      console.log(chalk.green("Mock data generated"));
    }
  })
});

