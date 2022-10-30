const express = require("express");
const newApp = express();

newApp.get("/", (request, response) => {
  response.send("Home Page");
});

newApp.get("/about", (request, response) => {
  response.send("About Page");
});

module.exports = newApp;
newApp.listen(3001);
