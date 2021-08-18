const net = require("net");

// Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
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