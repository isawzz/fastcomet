const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

app.get("/", (req, res) => {
  res.send("✅ Game server is running!");
});
