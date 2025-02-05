# Deep Dive into Node.js Modules

We'll explore how modules actually work behind the scenes. We'll dive into how modules load into a page and how Node.js handles multiple modules, focusing on a deep dive into the `module.exports` and `require` functions.

## Behind the Scenes

In JavaScript, when you create a function...

```javascript
function x() {
  const a = 10;
  function b() {
    console.log("b");
  }
}
```

Will you be able to access this value? No

```javascript
console.log(a);
//op - a is not defined
```

### Question

If you execute this code, will you be able to access it outside the function?

### Answer

You cannot access a value outside the function `x` because it is defined within the function's scope. Each function creates its own scope, so variables inside a function are not accessible from outside that function.

To learn more about scope, check out this video: Understanding Scope in JavaScript.

## Important Concept 🧐

Modules in Node.js work similarly to function scopes. When you require a file, Node.js wraps the code from that file inside a function. This means that all variables and functions in the module are contained within that function's scope and cannot be accessed from outside the module unless explicitly exported.

To expose variables or functions to other modules, you use `module.exports`. This allows you to export specific elements from the module, making them accessible when required elsewhere in your application.

All the code of a module is wrapped inside a function when you call `require`. This function is not a regular function; it's a special type known as an IIFE (Immediately Invoked Function Expression). Here's how it works:

```javascript
(function () {
  // All the code of the module runs inside here
})();
```
