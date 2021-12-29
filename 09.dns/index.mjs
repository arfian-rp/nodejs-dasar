//https://nodejs.org/dist/latest-v16.x/docs/api/dns.html
import dns from "dns/promises";

console.info(await dns.lookup("arfian-id.web.app"));
