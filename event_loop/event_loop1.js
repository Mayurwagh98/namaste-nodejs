const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate called"));

fs.readFile("./test.txt", (err, data) => {
  console.log("readFile called");
});

setTimeout(() => console.log("setTimeout called"), 0);

function printA() {
  console.log("a=", a);
}

printA();

console.log("last line of code");


