//https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html
//buffer merupakan object yang berisikan urutan byte dengan panjang tetap.
//buffer merupakan turunan dari tipe data Uint8Array.
//buffer ada di global.

const buffer = Buffer.from("arfian");
console.info(buffer.toString());
console.info(buffer);

buffer.reverse();
console.info(buffer.toString());
console.info(buffer);

//buffer encoding
const buff = Buffer.from("Arfian Pradana", "utf8");
console.info(buff);
console.info(buff.toString("base64"));
console.info(buff.toString("hex"));

const buff2 = Buffer.from("QXJmaWFu", "base64");
console.info(buff2.toString("utf8"));
