const express = require("express");
const redis = require("redis");

const app = express();
const clint = redis.createClient();
clint.set("visits", 0);

app.get("/", (req, res) => {
  clint.get("visits", (err, visits) => {
    res.send("Number of visitors is" + visits);
    clint.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
