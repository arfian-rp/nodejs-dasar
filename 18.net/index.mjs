import net from "net";

const client = net.createConnection({
  port: 8888,
  host: "localhost",
});

client.on("data", (data) => {
  console.log(`receive data from server : ${data.toString()}`);
});

setInterval(() => {
  client.write(`${process.argv[2] || "Arfian"}`);
}, 2000);
