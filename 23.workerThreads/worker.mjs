import { parentPort, threadId } from "worker_threads";

parentPort.on("message", (msg) => {
  for (let i = 0; i < msg; i++) {
    console.log(`thread-${threadId} send msg ${msg}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});
