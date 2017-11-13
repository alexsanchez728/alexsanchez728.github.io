"use strict";

let apiKeys = require("./apiKeys");
let events = require("./events");

apiKeys.retrieveKeys();
events.init();