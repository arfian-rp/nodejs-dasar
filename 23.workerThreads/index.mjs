//https://nodejs.org/dist/latest-v16.x/docs/api/worker_threads.html
//worker threads adalah STDlib yg bisa kita gunakan untuk menggunakan thread ketika mengeksekusi JS secara paralel
//worker threads sangat cocok ketika kita membuat kode program yg butuh jalan secara paralel,
//dan biasanya kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive seperti enkripsi atau kompresi
import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./23.workerThreads/worker.mjs");
const worker2 = new Worker("./23.workerThreads/worker.mjs");

worker1.on("message", (msg) => {
  console.log(`thread-${threadId} receive from worker 1 : ${msg}`);
});

worker2.on("message", (msg) => {
  console.log(`thread-${threadId} receive from worker 2 : ${msg}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
