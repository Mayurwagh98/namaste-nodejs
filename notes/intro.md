## Node.js Overview

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is maintained by the OpenJS Foundation.

### Key Features

- **Browser-Independent Execution**: Node.js enables JavaScript execution outside of web browsers
- **Versatile Runtime Environment**: While JavaScript traditionally lives in browsers, Node.js expands its capabilities to:
  - Servers
  - Desktop applications
  - Embedded systems

This versatility has earned Node.js the motto: "Run JavaScript Everywhere"

### Technical Architecture

- Event-driven design
- Asynchronous I/O support (non-blocking I/O)

- To run the JS, you always need an JS engine.
- Everywhere you write JS code, there is an JS engine, that executes the code.
- Ryan started with the Spider-Monkey Js Engine, which is found on Firefox.
but in two days he tried using v8 and never looked back.
- earlier, Ryan was working independently, but there was a company named
- Joyent, and this company was working on something similar to NodeJS. and
they hire Ryan to work under us, we will fund your project. big contribution to
Joyent Company.
- The earlier name of Node.js was Web.js, but Ryan Dahl later renamed it to
Node.js because it was intended to be used for more than just web servers.
- Apache HTTP Server was a blocking server, so Ryan wanted to create a nonblocking server, which is why Node.js is a non-blocking I/O.The advantage of
a non-blocking server is that it can handle multiple requests with a smaller
number of threads.
- In 2010, NPM Node Package Manager) was introduced. NPM is a package
manager for Node.js, and it played a critical role in the success of Node.js.
- Initially, Node.js was built only for macOS and Linux, but in 2011, it gained
support for Microsoft Windows as well.
- In 2012, Isaac Z. Schlueter began maintaining Node.js; he is also the creator
of NPM.
- In 2014, a developer named Fedor created a fork of Node.js called io.js, which led to controversy within the company. As a result, 3 to 4 developers began maintaining the io.js branch.
- In September 2015, Node.js and io.js were merged, and the combined project
was named the Node.js Foundation.
- In 2019, the JS Foundation and the Node.js Foundation merged to form the
OpenJS Foundation, which now maintains Node.js.