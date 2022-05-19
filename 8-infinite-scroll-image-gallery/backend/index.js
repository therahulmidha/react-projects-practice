const express = require("express");
const { createApi } = require("unsplash-js");
const app = express();
require("dotenv").config();
global.fetch = require("node-fetch");

const unsplash = createApi({
  accessKey: process.env.ACCESS_KEY,
});

app.get("/api/photos", (req, res) => {
  console.log("Request received for start: ", req.query.start);
  unsplash.photos
    .list(req.query.start, req.query.count)
    // .then(toJson)
    .then((json) => res.json(json));
});

app.listen(5000, () => {
  console.log("Server listening on 5000");
});
