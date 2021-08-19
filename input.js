let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === '1') {
    connection.write("Say: Hello!");
  }
  if (key === '2') {
    connection.write("Say: Goodbye!");
  }
  if (key === '3') {
    connection.write("Say: Did you die again?");
  }
  if (key === '4') {
    connection.write("Say: Nice score!");
  }
  if (key === '5') {
    connection.write("Say: Maybe next time!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;