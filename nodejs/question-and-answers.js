
/* Question 1: What is NodeJs?
    Node.js is Server-side scripting which is used to build scalable programs. It is used to create server-side web
    applications.

    Node applications are so fast and so scalable because NodeJS is single threaded based on an event driven,
    non-blocking I/O model which makes NodeJS very lightweight and efficient.

    You can use  I/O intensive web applications like video streaming sites.

    V8 engine actually parses and run the code in NodeJS and not in the browser.
    NodeJS can be run as a server in which we can access the file system and better networking capabilities.

*/

/* Question 2: Uses of NodeJS
    Node.js makes building scalable network programs easy. It can be used for:
    - Real-time web applications
    - Network applications
    - Distributed systems
    - General purpose applications

*/

/* Question 3: Advantages of NodeJS
    The main advantages of Node.js:
    1. Node.js is asynchronous and event-driven. All API's of Node.js library are non-blocking, and its server doesn't
    wait for an API to return data. It moves to the next API after calling it, and a notification mechanism of Events
    of Node.js responds to the server from the previous API call.
    2. Node.js is very fast because it builds on Google Chrome?'s V8 JavaScript engine. Its library is very fast in
    code execution.
    3. Node.js is single threaded but highly scalable.
    4. Node.js provides a facility of no buffering. Its application never buffers any data. It outputs the data in
    chunks.

*/

/* Question 4: The event-driven architecture in Node.js.
    Node.js is designed to be event-driven, using an event loop to handle asynchronous operations. Callback functions
    are commonly used to handle events.
*/

/* Question : Reading and writing files
    To read the data in a particular file we can use the fs module. In fs module we use the readFileSync method which
    processes the file in a asynchronous way.

*/