//https://nodejs.org/dist/latest-v16.x/docs/api/process.html
//process merupakan Standart Lib yg digunakan
//untuk mendapatkan informasi process NODEJS
//yg berjalan.
//process merupakan instance dari EventEmitter, sehingga kita dapat menambahkan listener dalam process.

import process from "process";

process.on("exit", (number) => {
  console.log(`exit code : ${number}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.log(`tidak akan di eksekusi`);
