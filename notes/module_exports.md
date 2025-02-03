### How do you make two modules work together?

Using the `require` function allows modules to work together in Node.js. This function enables one module to import and use functionality from another module.

### What is the require() function?

The `require()` function is a built-in function in Node.js that allows you to include or require other modules into your main modules.

### Writing Code with require()

Let's learn how to use the require function in practice.

#### Task

Our objective is to execute the code written in the xyz.js module by running the app.js module.

#### Steps

1. Open the app.js module
2. Include the xyz module using the require function
3. Run the code using Node.js (as discussed in the previous lecture)

## CommonJS Modules vs ES Modules

### CommonJS Modules

- module.exports, require()
- by default used in nodejs
- older way of doing things
- synchronous
- non strict mode

### ES Modules

- import, export
- by default use in react, angular, etc
- newer way of doing things
- asynchronous
- strict mode

### Key Differences

#### 1. Synchronous vs. Asynchronous

CommonJS requires modules in a synchronous manner, meaning the next line of code will execute only after the module has been loaded. In contrast, ES modules load modules asynchronously, allowing for more efficient and flexible code execution. This distinction is a powerful feature and an important point to remember for interviews.

#### 2. Strict Mode

CommonJS code runs in non-strict mode, while ES modules execute in strict mode. This means that ES modules enforce stricter parsing and error handling, making them generally safer and more reliable.

## Module Exports

### What is module.exports?

module.exports is an empty object by default.

### Common Usage Patterns

Another common pattern you will encounter is that, instead of writing:

```javascript
module.exports = {
  x,
  calculateSum,
};
```

developers may prefer to write it like this:

```javascript
module.exports.x = x;
module.exports.calculateSum = calculateSum;
```

### Built-in Node.js Modules

There are some modules that are built into the core of Node.js, one of which is the util module. You can import it like this:

```javascript
const util = require("node:util");
```

The util object contains a variety of useful functions and properties.

### Module Structure

In general, a module can be a single file or a folder. A module is essentially a collection of JavaScript code that is private to itself and organized separately. If you want to export something from a module, you can use module.exports to expose the desired functionality to other parts of your application.
