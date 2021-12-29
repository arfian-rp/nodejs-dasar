//https://nodejs.org/dist/latest-v16.x/docs/api/path.html
import path from "path";

//dummy
const file = "./contoh/arfian/index.html";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
