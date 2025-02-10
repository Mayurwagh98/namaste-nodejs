const crypto = require("crypto");

console.log("hello world");

let a = 323;
let b = 3223;

crypto.pbkdf2Sync("password", "salt", 10000, 50, "sha512", () => {
  console.log("password hashed successfully");
});

function multiplyFun(x, y) {
  const result = a * b;
  return result;
}

let c = multiplyFun(a, b);

console.log("multiplication resilt:", c);
