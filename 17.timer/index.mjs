//https://nodejs.org/dist/latest-v16.x/docs/api/timers.html
//timer merupakan STDlib untuk melakukan scheduling
//timer terdapat di globals, sehingga kita melakukan tanpa import,
//namun semua function timer menggunakan callback
//kita bisa menggunakan timer versi promise dari module timer/promise

import timersPromise from "timers/promises";

//versi callback
setTimeout(() => {
  console.log(`Hello World (callback)`);
}, 2000);

//versi promise
//variable value akan terisi setelah setTimeout
const value = await timersPromise.setTimeout(1000, "Arfian");
console.log(`Hello World (promise) ${value}`);

//for await
for await (const startTime of timersPromise.setInterval(4000, new Date())) {
  console.log(`for await ${startTime}`);
}
