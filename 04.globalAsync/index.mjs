function samplePromise() {
  return Promise.resolve("arfian");
}

//secara default kalau pakai ekstensi (module js) .mjs
//behaviornya adalah async
const name = await samplePromise();
console.info(name);
