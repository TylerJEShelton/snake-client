const connect = require("./client");

const setupInput = () => {
  const stdin = process.stdin;
  const handleUserInput = () => {
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();