//https://nodejs.org/dist/latest-v16.x/docs/api/stream.html
//stream adalah standard lib untuk kontrak aliran data di NodeJS
//ada banyak sekali Stream object di NodeJS
//Stream bisa jadi object yang bisa dibaca, atau bisa ditulis, dan Stream adalah turunan dari EventEmitter
//Stream hanya kontrak.

import fs from "fs";
const writer = fs.createWriteStream("./16.stream/target.log");
writer.write("arfian");
writer.write("r");
writer.write("p");
writer.end();

const reader = fs.createReadStream("./16.stream/target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
