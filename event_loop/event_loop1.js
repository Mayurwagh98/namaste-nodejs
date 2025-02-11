// Import the Node.js file system module
const fs = require("fs");

// Synchronous code - executed immediately in the main thread
const a = 100;

// setImmediate is executed in the Check phase of the event loop
// It's typically used when you want to execute code after I/O events
setImmediate(() => console.log("setImmediate called"));

// fs.readFile is an asynchronous I/O operation
// 1. The callback is registered with libuv
// 2. Node.js continues executing without waiting
// 3. Once file is read, callback is moved to the I/O callbacks queue
fs.readFile("./test.txt", (err, data) => {
  console.log("readFile called");
});

// setTimeout with 0ms delay is executed in the Timers phase
// Even with 0ms delay, it's still asynchronous and waits for at least one tick
setTimeout(() => console.log("setTimeout called"), 0);

// Synchronous function declaration
function printA() {
  console.log("a=", a);
}

// Synchronous function call - executed immediately
printA();

// Synchronous code - executed immediately
console.log("last line of code");

// Actual execution order and explanation:

// First: Synchronous code executes immediately in the call stack
// - printA() -> "a= 100"
// - "last line of code"

// Then: Event Loop phases begin

// 1. Timer phase: setTimeout callback
// - Even with 0ms delay, setTimeout must wait for at least one tick
// - Gets processed in the next iteration of the event loop

// 2. Check phase: setImmediate callback
// - setImmediate is designed to execute after I/O events
// - Often runs before setTimeout(0) because it doesn't need to wait for the timer

// 3. I/O Callbacks phase: readFile callback
// - Actual timing depends on file system and system load
// - Usually takes longer than setTimeout/setImmediate
// - Node.js delegates to libuv for file operations

// Note: The exact order between setTimeout(0) and setImmediate can vary
// depending on process performance and system load. In practice,
// setImmediate often executes before setTimeout(0) when both are
// queued in the same tick.
