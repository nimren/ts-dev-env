import * as jsf from "json-schema-faker";
import {schema} from "./mockDataSchema";
import * as fs from "fs";
import * as chalk from "chalk";


const json: string = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, (err: NodeJS.ErrnoException) => {
  if(err){
    return console.log(chalk.red(err.message));
  }else {
    console.log(chalk.green("Mock data generated"));
  }
})
