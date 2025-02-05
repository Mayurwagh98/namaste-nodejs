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

In this pattern, you create a function and then immediately invoke it. This is different from a normal function in JavaScript, which is defined and then called separately:

```javascript
function x() {}
x();
```

In Node.js, before passing the code to the V8 engine, it wraps the module code inside an IIFE. The purpose of IIFE is to:

- Immediately Invoke Code: The function runs as soon as it is defined.
- Keep Variables and Functions Private: By encapsulating the code within the IIFE, it prevents variables and functions from interfering with other parts of the code. This ensures that the code within the IIFE remains independent and private.

Using IIFE solves multiple problems by providing scope isolation and immediate execution.

### Very Important

**Q1: How are variables and functions private in different modules?**

**A:** Because of IIFE and the requirement (statement) wrapping code inside IIFE.

Q2: How do you get access to module.exports ? Where does this
module come from?
A
In Node.js, when your code is wrapped inside a function, this function has a
parameter named
module . This parameter is an object provided by Node.js that includes
module.exports .

When you use module.exports , you're modifying the exports object of the current
module. Node.js relies on this object to determine what will be exported from the
module when it's required in another file.
The module object is automatically provided by Node.js and is passed as a
parameter to the function that wraps your code. This mechanism allows you to
define which parts of your module are accessible externally.
suppose you want to include one module inside it.