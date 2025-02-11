console.log("hello world");

let a = 3422;
let b = 2323;

setTimeout(() => {
  console.log("setTimeout called");
}, 0);

setTimeout(() => {
  console.log("2nd setTimeout called");
}, 3000);

function multiplyFun(x, y) {
  const result = a * b;
  return result;
}

let c = multiplyFun(a, b);

console.log("multiplication resilt:", c);
