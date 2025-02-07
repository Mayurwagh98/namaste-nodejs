## Thread

A thread is the smallest unit of execution within a process in an operating system. It represents a single sequence of instructions that can be managed independently by a scheduler. Multiple threads can exist within a single process, sharing the same memory space but executing independently. This allows for parallel execution of tasks within a program, improving efficiency and responsiveness.

Threads can be either:
- Single-threaded
- Multi-threaded

## JavaScript Threading Model

JavaScript is a synchronous, single-threaded language, meaning there is only one thread in which the JavaScript engine (such as the V8 engine) runs. In JavaScript, code is executed line by line within this single thread.

In other languages like C or Java, code can be executed across multiple threads. For example, a portion of the code might be executed in one thread, while another part runs simultaneously in a different thread. However, JavaScript handles this process more straightforwardly—executing code one line after the other in sequence.

So, if you're executing line 2 in JavaScript, it will only run after line 1 has finished executing. This is the essence of synchronous execution: each task is performed one after the other, without overlap.
## Synchronous vs Asynchronous JavaScript

### What is a Synchronous System?
In a synchronous system, tasks are completed one after another. Think of this as if you have just one hand to accomplish 10 tasks. So, you have to complete one task at a time.

Here, an order can only be fulfilled once the previous order is fulfilled.

### What is an Asynchronous System?
In this system, tasks are completed independently. Here, imagine that for 10 tasks, you have 10 hands. So, each hand can do each task independently and at the same time.

All orders with Coke will get it at 0 min, the second will get it in 10 min, and all the ice cream orders will be fulfilled in 5 min. No one has to wait for any other order.

So, JavaScript itself is synchronous, but with the power of Node.js, it can handle asynchronous operations, allowing JavaScript to perform multiple tasks concurrently.

### JavaScript Engine Components and Synchronous Code Execution

The JavaScript engine operates with a single call stack, and all the code you write is executed within this call stack. The engine runs on a single thread, meaning it can only perform one operation at a time.

In addition to the call stack, the JavaScript engine also includes a memory heap. This memory heap stores all the variables, numbers, and functions that your code uses.

One key feature of the JavaScript V8 engine is its garbage collector. The garbage collector automatically identifies and removes variables that are no longer in use, freeing up memory. Unlike languages like C, where developers need to manually allocate and deallocate memory, JavaScript handles this process automatically. This means you don't have to worry about memory management—it's all taken care of by the engine.

### Code Execution Process

#### Step 1: Global Execution Context Creation
As soon as the JavaScript engine begins executing the code, it creates a Global Execution Context. This is the main environment where the top-level code is executed. The global execution context is unique and is always the first to be pushed onto the call stack.

#### Step 2: Memory Creation Phase
Before any code is executed, the JavaScript engine enters the memory creation phase. During this phase:
- Variables `a` and `b` are declared in memory and initialized to `undefined`
- The function `multiplyFn` is also stored in memory, with its value set to the entire function definition

#### Step 3: Code Execution Phase
Once the memory creation phase is complete, the engine moves to the code execution phase:
- Execution of `let a = 10786;` and `let b = 20987;`: The variables `a` and `b` are now assigned their respective values
- Execution of `let c = multiplyFn(a, b);`: The function `multiplyFn` is invoked, creating a new execution context specifically for this function

#### Step 4: Function Execution Context Creation
When `multiplyFn(a, b)` is called, the JavaScript engine:
- Creates a new execution context for `multiplyFn` and pushes it onto the top of the call stack
- In this new context, the parameters `x` and `y` are assigned the values of `a` and `b`

#### Step 5: Memory Creation and Code Execution Inside multiplyFn
Inside `multiplyFn`:
- The memory creation phase initializes `result` in memory with `undefined`
- Execution of `const result = a * b;`: The multiplication is performed, and `result` is assigned the value 226215682
- Execution of `return result;`: The function returns 226215682, and the `multiplyFn` execution context is popped off the call stack

#### Step 6: Resuming Global Execution Context
Back in the global execution context, the returned value from `multiplyFn` (226215682) is assigned to the variable `c`.

#### Step 7: Completion
Once the entire code is executed, the global execution context is also popped out, and the call stack becomes empty.
