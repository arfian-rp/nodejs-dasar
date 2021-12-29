//https://nodejs.org/dist/latest-v16.x/docs/api/os.html
import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.homedir());
console.info(os.hostname());
console.table(os.cpus());
console.table(os.networkInterfaces());
