//https://nodejs.org/dist/latest-v16.x/docs/api/readline.html
//membaca input

import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("siapa nama anda? : ", (name) => {
  console.log(`Hello ${name}`);
  input.close();
});
