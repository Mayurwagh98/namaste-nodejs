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

### Q2: How do you get access to module.exports? Where does this module come from?

In Node.js, when your code is wrapped inside a function, this function has a parameter named `module`. This parameter is an object provided by Node.js that includes `module.exports`.

When you use `module.exports`, you're modifying the exports object of the current module. Node.js relies on this object to determine what will be exported from the module when it's required in another file.

The module object is automatically provided by Node.js and is passed as a parameter to the function that wraps your code. This mechanism allows you to define which parts of your module are accessible externally.

suppose you want to include one module inside it.

## How require() Works Behind the Scenes

### Module Resolution

Node.js first determines the path of the module. It checks whether the path is:

- A local file (`./local`)
- A JSON file (`.json`)
- A module from the `node_modules` directory
- Other possible locations

### Module Loading

Once the path is resolved, Node.js loads the file content based on its type. The loading process varies depending on whether the file is:

- JavaScript
- JSON
- Other supported types

### IIFE Wrapping

The module code is wrapped in an Immediately Invoked Function Expression (IIFE). This wrapping helps:

- Encapsulate the module's scope
- Keep variables and functions private to the module

### Code Evaluation and Module Exports

After wrapping, Node.js:

1. Evaluates the module's code
2. Sets `module.exports` to export the module's functionality or data
3. Makes the module's exports available to other files

### Caching (Important)

Caching is crucial for performance. Node.js caches the result of the `require()` call so that the module is only loaded and executed once.

### Example Scenario

Suppose you have three files: `sum.js`, `app.js`, and `multiply.js`. All three files require a common module named `xyz`.

#### Initial Require Process

When `sum.js` first requires `xyz` with `require('./xyz')`, Node.js performs the full require() process for `xyz`:

1. Resolves the path to `xyz`
2. Loads the content of `xyz`
3. Wraps the code in an IIFE
4. Evaluates the code and sets `module.exports`
5. Caches the result

Node.js creates a cached entry for `xyz` that includes the evaluated module exports.

Subsequent Requires:
When app.js and multiply.js later require xyz using require('./xyz') , Node.js
skips the initial loading and evaluation steps. Instead, it retrieves the module
from the cache.
This means that for app.js and multiply.js , Node.js just returns the cached
module.exports without going through the resolution, loading, and wrapping
steps again.

Impact on Performance:
If caching did not exist, each require('./xyz') call would repeat the full module
loading and evaluation process. This would result in a performance overhead,
especially if xyz is a large or complex module and is required by many files.
With caching, Node.js efficiently reuses the modules loaded and evaluated
code, significantly speeding up module resolution and reducing overhead.

## libuv and Node.js Internals

Node.js is popular primarily because of libuv. libuv plays a critical role in enabling Node.js's high performance and scalability. It provides the underlying infrastructure for:

- Asynchronous I/O
- Event handling
- Cross-platform compatibility

### Core JavaScript Code

In the Node.js repository's `lib` directory, you'll find the core JavaScript code for Node.js. This folder contains the source code for various built-in modules like:

- `http`
- `fs`
- `path`

Each module is implemented as a JavaScript file within this directory.

### setTimeout Implementation

**Q: Where does setTimeout come from and how does it work behind the scenes?**

You can find the implementation here:
[Node.js Timers Implementation](https://github.com/nodejs/node/blob/main/lib/timers/promises.js)

### require() in Node.js Repository

The actual implementation of the `require` method can be found in the helper.js file:
[Node.js Modules Helper](https://github.com/nodejs/node/blob/main/lib/internal/modules/helpers.js)

The `makeRequireFunction` creates a custom require function for a given module `mod`. This function:

1. Validates that `mod` is an instance of `Module`
2. Defines a require function that uses `mod.require()` to load modules
3. Implements a `resolve` method for resolving module paths using `Module._resolveFilename()`
4. Implements a `paths` method for finding module lookup paths using `Module._resolveLookupPaths()`
5. Sets additional properties on the require function, such as `main`, `extensions`, and `cache`

### LazyModule

For more details about module loading, see:
[Node.js CJS Loader](https://github.com/nodejs/node/blob/main/lib/internal/modules/cjs/loader.js)

### Error Handling in require()

If the `id` argument provided to the `require()` function is empty or undefined, Node.js will throw an exception. This occurs because:

- The `require()` function expects a string representing the path or identifier of the module to load
- When it receives `undefined`, it results in a `TypeError`
- This indicates that an invalid argument value was provided

The Node.js documentation and GitHub repository provide insights into how `require()` handles module loading. Reviewing these resources can help you understand how to properly use `require()` and handle potential errors.
