const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: ARI");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
}

module.exports = connect;