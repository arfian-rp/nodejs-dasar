//https://nodejs.org/dist/latest-v16.x/docs/api/cluster.html
//cluster menjalankan beberaoa process Nodejs sekaligus
//sangat cocok ketika kita menggunakan CPU multicore
//agar semua CPU core terutilisasi
//Cluster Primary => koordinator untuk para worker
// CLuster Worker => aplikasi yg menjalankan kode program
import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

function runApp(port) {
  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  });
  server.listen(port);
}

if (cluster.isPrimary) {
  //check mode cluster
  console.log(`primary ${process.pid}`);
  //   cluster.fork(); //jalankan worker
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.id} is exited`);
    cluster.fork(); //apabila ada cluster mati, maka jalankan ulang
  });
}

if (cluster.isWorker) {
  runApp(3000);
  console.log(`worker ${process.pid}`);
}
