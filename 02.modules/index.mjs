import os from "os";
import print from "./utils.mjs";

console.info(os.platform());
console.table(os.cpus());

print("Bye World");
