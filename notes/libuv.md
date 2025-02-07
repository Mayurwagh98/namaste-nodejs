## Thread

A thread is the smallest unit of execution within a process in an operating system. It represents a single sequence of instructions that can be managed independently by a scheduler. Multiple threads can exist within a single process, sharing the same memory space but executing independently. This allows for parallel execution of tasks within a program, improving efficiency and responsiveness.

Threads can be either:
- Single-threaded
- Multi-threaded

## JavaScript Threading Model

JavaScript is a synchronous, single-threaded language, meaning there is only one thread in which the JavaScript engine (such as the V8 engine) runs. In JavaScript, code is executed line by line within this single thread.

In other languages like C or Java, code can be executed across multiple threads. For example, a portion of the code might be executed in one thread, while another part runs simultaneously in a different thread. However, JavaScript handles this process more straightforwardly—executing code one line after the other in sequence.

So, if you're executing line 2 in JavaScript, it will only run after line 1 has finished executing. This is the essence of synchronous execution: each task is performed one after the other, without overlap.
