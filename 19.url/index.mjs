//https://nodejs.org/dist/latest-v16.x/docs/api/url.html
//url adalah STDlib untuk bekerja dengan url

import { URL } from "url";

const arfian = new URL("https://arfian-id.web.app/contact");

console.info(arfian.toString());
console.info(arfian.protocol);
console.info(arfian.host);
console.info(arfian.pathname);
console.info(arfian.password);
console.info(arfian.searchParams);

//mengubah
arfian.host = "secretmsg.netlify.app";
arfian.searchParams.append("name", "value");

console.info(arfian.toString());
console.info(arfian.protocol);
console.info(arfian.host);
console.info(arfian.pathname);
console.info(arfian.password);
console.info(arfian.searchParams);
