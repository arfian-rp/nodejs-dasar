//https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html

//run 'node inspect <file name>'

//cont, c: Continue (lanjutkan exec)
//next, n: Step next (next breakpoint)
//step, s: Step in (masuk ke funct)
//out, o: Step out (keluar ke funct)
//pause: Pause running code

function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const name = "Arfian";
console.log(sayHello(name));
