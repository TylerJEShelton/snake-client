const net = require("net");
const { IP, PORT, USERNAME, DEATH_MESSAGE1, DEATH_MESSAGE2, DEATH_MESSAGE3 } = require("./constants");

// Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write(`Name: ${USERNAME}`);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
    // checks to see if the server has notified the user that they have died, if so, exit the program
    if (data === DEATH_MESSAGE1 || data === DEATH_MESSAGE2 || data === DEATH_MESSAGE3) process.exit();
  });

  // when an error is caught, display the eror code and then close the program
  conn.on("error", (data) => {
    console.log(`Sorry, an ${data.code} error has occurred and the program will close.`);
    process.exit();
  });
  return conn;
};

module.exports = connect;