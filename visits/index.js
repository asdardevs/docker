const express = require("express");
const redis = require("redis");
const process = require("process");
const app = express();
const clint = redis.createClient({ host: "redis-server", port: 6379 });
clint.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0);
  clint.get("visits", (err, visits) => {
    res.send("Number of visitors is " + visits);
    clint.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
