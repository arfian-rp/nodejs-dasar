//https://nodejs.org/dist/latest-v16.x/docs/api/http.html
//https://nodejs.org/dist/latest-v16.x/docs/api/https.html
import https from "https";

const endpoint = "https://arf-json.herokuapp.com/data";

const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.on("data", (data) => {
      console.info(data.toString());
    });
  }
);

request.write(
  JSON.stringify({
    first_name: "andi",
    last_name: "f",
    email: "andifuckks@ss.com",
    gender: "male",
    country: "niggerya",
  })
);

request.end();
