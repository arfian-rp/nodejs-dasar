//https://nodejs.org/dist/latest-v16.x/docs/api/console.html
//console ada di global
//console juga bisa membuat object console sendiri jika kita mau
//console di nodeJS tidak hanya di terminal, kita bisa menentukan dimana, seperti file,
//karna ini bentuknya stream, bahkan bisa dikirim di network client

import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("./22.console/app.log");

const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

log.log("Hello World");
log.table(["sapi", "kambing", "domba"]);
log.error(new Error("contohError"));
