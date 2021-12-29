//https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html
//zlib adalah STDlib yang digunakan untuk melakukan kompresi menggunakan Gzip
import zlib from "zlib";
import fs from "fs";

//kompres
function kompres() {
  const source = fs.readFileSync("./21.zlib/index.mjs");
  // console.log(source.toString());
  const result = zlib.gzipSync(source);
  fs.writeFileSync("./21.zlib/hasil-kompres.txt", result);
}
kompres();

//dekompres
function dekompres() {
  const source = fs.readFileSync("./21.zlib/hasil-kompres.txt");
  // console.log(result.toString());
  const result = zlib.unzipSync(source);
  fs.writeFileSync("./21.zlib/hasil-dekompres.txt", result);
}
dekompres();
