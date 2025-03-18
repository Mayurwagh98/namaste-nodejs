// Import the crypto module for cryptographic operations
const crypto = require("crypto");

// Initial console output to verify code execution
console.log("hello world");

// Global variables for multiplication operation
let a = 323;
let b = 3223;

// Synchronous password hashing operation using PBKDF2
// This is a blocking operation that will pause the execution until completed
// Parameters:
// - "password": The input password to hash
// - "salt": Salt value for the hash
// - 10000: Number of iterations
// - 50: Key length in bytes
// - "sha512": Hash digest algorithm
crypto.pbkdf2Sync("password", "salt", 10000, 50, "sha512");
console.log("password hashed successfully");

crypto.pbkdf2("password", "salt", 10000, 50, "sha512", () => {
  console.log("2nd password hashed successfully");
});

/**
 * Multiplies two numbers using global variables instead of parameters
 * Note: This function ignores its parameters and uses global a, b instead
 * @param {number} x - Unused parameter
 * @param {number} y - Unused parameter
 * @returns {number} The product of global variables a and b
 */
function multiplyFun(x, y) {
  const result = a * b;
  return result;
}

// Calculate multiplication using the function
let c = multiplyFun(a, b);

// Display the multiplication result
console.log("multiplication resilt:", c);
