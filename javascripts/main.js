"use strict";

let apiKeys = require("./apiKeys");
let events = require("./events");

apiKeys.retrieveKey().then(() => {
  events.init();
}).catch((err) => {
  console.log(err);
});
