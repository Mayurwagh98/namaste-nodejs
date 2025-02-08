const fs = require("fs");
const https = require("https");

console.log("hello world");

let a = 2321;
let b = 43434;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file data", data);
});

function multiplyFun(x, y) {
  const result = x * y;
  return result;
}

let c = multiplyFun(a, b);

console.log("c value", c);
