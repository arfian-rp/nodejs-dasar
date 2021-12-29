//https://nodejs.org/dist/latest-v16.x/docs/api/util.html
// util adalah STDlib berisi utility yg digunakan untuk mempermudah pembuatan kode program di nodeJS
import util from "util";

console.info(util.format("nama : %s", "Arfian"));

const person = { firstname: "Arfian", lastname: "rp" };
console.info(util.format("Person : %j", person));
