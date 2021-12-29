//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
//dalam file system, terdapat 3 jenis library.
//1. blocking / synchronous
//2. non-blocking / asynchronous menggunakan callback
//3. non-blocking / asynchronous menggunakan promise

import fs from "fs";
import fsP from "fs/promises";

//read secara sync
const buffer = fs.readFileSync("./contoh/arfian/data.json");
console.info(buffer.toString());

//write secara sync
fs.writeFileSync("./contoh/arfian/time.txt", new Date().toString());

//read secara async
const buffer2 = await fsP.readFile("./contoh/arfian/data.json");
console.info(buffer2.toString());

//write secara async
await fsP.writeFile("./contoh/arfian/time.txt", new Date().toString());
