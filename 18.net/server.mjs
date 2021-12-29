//https://nodejs.org/dist/latest-v16.x/docs/api/net.html
//net merupakan STDlib yang bisa digunakan untuk membuat network client server berbasis TCP
//net server dan client merupakan object stream, sehingga kita bisa baca dataanya, tulis datanya, dan juga menambahkan listener
import net from "net";

const server = net.createServer((client) => {
  console.log(`client connected`);
  client.on("data", (data) => {
    console.log(`receive data from client : ${data.toString()}`);
    client.write(`hello ${data.toString()}`);
  });
});

server.listen(8888, "localhost");
