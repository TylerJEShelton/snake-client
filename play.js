const connect = require("./client");
const setupInput = require("./input");
let connection;
console.log("Connecting ...");
connection = connect();
setupInput(connection);