const connect = require("./client");
const setupInput = require("./input");

let connection;

// connecting to the server
console.log("Connecting ...");
connection = connect();

// handle all the user inputs
setupInput(connection);