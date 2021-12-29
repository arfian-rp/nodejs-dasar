//https://nodejs.org/dist/latest-v16.x/docs/api/events.html
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("hello", (name, val) => {
  //atau emitter.addListener(name, cb)
  console.log(`hello ${name}`);
  console.log(val);
});

//trigger event hello
emitter.emit("hello", "sapi", 1);
