
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

    An event-driven programming approach uses events to trigger various functions. An event can be anything, such as
    typing a key or clicking a mouse button. A call-back function is already registered with the element executes
    whenever an event is triggered.

*/

/* Question 5: Blocking and Unblocking Asynchronous nature of NodeJs
    When we are running the code synchronously each line of code waits for the previous line of code to be executed.
    Synchronous code is also called blocking code.

    To avoid blocking of code we can use asynchronous code which does not block our code execution. Asynchronous code
    offloads the heavy lifting in the background. Once the result is received the callback function is executed.
    During this time the rest of the code is executed as it is on the execution context.

    For example using readFile instead of readFileSync helps to have non blocking code.

*/

/* Question 6: Creating a simple Web Server
    For creating a server, first we create a server and secondly we start a server.

    example
    //Creating a server
    const server = http.createServer((request, response) => {
        response.end("Hello from the server");
    })

    //Starting a server
    server.listen(3000, "127.0.0.1", () => {
        console.log(`Listening to requests on port 8000`)
    });
*/

/* Question 7: What is npm
    npm (Node Package Manager) is the package manager for Node.js. It allows developers to install, share, and manage
    third-party libraries (packages) for their Node.js applications.

*/

/* Question 8: Types of packages
    The two types of packages that we can install are simple dependencies or development dependencies.

    1. Simple, or regular dependencies, are simply packages that contain some code that we will include in our own code.
    So code upon which we built our own application, and that's why we actually call them dependencies, because our
    project and our code depend on them to work correctly.

    2. Development dependencies are not needed for production we just use them for developing our application. To specify
    the developmental dependency we use the command
    It then adds the entry to the package.json file.

*/

/* Question 9: Types of installs
     There are two types of installs are local and global.
     1. Local installs are available only in that project
     2. Global installs are available on all the projects.

*/

/* Question 10: Package versioning and updating

    Most of the packages on npm follow the so-called semantic version notation, which means that their versions numbers
    is always expressed with these three numbers. -> "^1.18.11"

    The first one here is called the major version. The major version, which is only bumped up whenever it is
    a huge new release which can have breaking changes. When there is a new version there are chances that it might
    break our existing code.

    The second one is called the minor version. The minor version introduces some new features into the package,
    but it does not include breaking changes. If one day the nodemon team, for example, decides to release version 1.19,
    well, that will then include some new features but it will not break our code.

    The third one is called the patch version. The patch version, which is just this last one here, is only intended to
    fix bugs.

    ^ This means that we accept minor version and bug fixes.
    ~ This accepts only patch releases.
    * Accepts the major version

*/

/* Question 11: Role of the package.json file
    package.json is a metadata file for a Node.js project. It includes project details, dependencies, scripts, and
    other configuration settings. It is used by npm to manage project dependencies and scripts.

*/

/* Question 12: Define I/O
    The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to
    or from another medium
    Every transfer is an output from one medium and an input into another. The medium can be a physical device,
    network, or files within a system

*/

/* Question 13: Explain the difference between frontend and backend development
    1. Frontend
    - Frontend refers to the client-side of an application
    - It is the part of a web application that users can see and interact with
    - It typically includes everything that attributes to the visual aspects of a web application
    - HTML, CSS, JavaScript, AngularJS, and ReactJS are some of the essentials of frontend development

    2. Backend
    - Backend refers to the server-side of an application
    - It constitutes everything that happens behind the scenes
    - It generally includes a web server that communicates with a database to serve request
    - Java, PHP, Python, and Node.js are some of the backend development technologies

*/

/* Question 14: Modules in NodeJs
    Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To
    include a module in a Node.js application, use the require() function with the parentheses containing the module's
    name.

    Node.js has many modules to provide the basic functionality needed for a web application. Some of them include:
    1. HTTP - Includes classes, methods, and events to create a Node.js HTTP server
    2. util - Includes utility functions useful for developers
    3. fs - Includes events, classes, and methods to deal with file I/O operations
    4. url - Includes methods for URL parsing
    5. query string - Includes methods to work with query string
    6. stream - Includes methods to handle streaming data
    7. zlib - Includes methods to compress or decompress files

*/

/* Question 15: Commonly used libraries in Node.js
    There are two commonly used libraries in Node.js:
    1. ExpressJS - Express is a flexible Node.js web application framework that provides a wide set of features to
    develop web and mobile applications.
    2. Mongoose - Mongoose is also a Node.js web application framework that makes it easy to connect an application to
    a database.

*/

/* Question 16: Purpose of the cluster module in Node.js
    The cluster module in Node.js allows you to create child processes to distribute the load across multiple CPU
    cores, improving performance and scalability.

 */

/* Question 17: How can you handle environment variables in Node.js?
    Environment variables can be accessed using process.env. They are commonly used to configure settings or store
    sensitive information like API keys.
 */

/* Question 18: What is the difference between require and import in Node.js
    require is the common way to include external modules in Node.js. import is used with ECMAScript modules (ES6+),
    and it's supported in more recent versions of Node.js.

 */

/* Question 19: EventEmitter in Node.js
    EventEmitter is a class that holds all the objects that can emit events.
    Whenever an object from the EventEmitter class throws an event, all attached functions are called upon
    synchronously.

 */

/* Question 20: Streams in Node.js
   Streams are objects that enable you to read data or write data continuously.
    There are four types of streams:
    1. Readable – Used for reading operations
    2. Writable − Used for write operations
    3. Duplex − Can be used for both reading and write operations
    4. Transform − A type of duplex stream where the output is computed based on input
 */

/* Question 21: How do you install, update, and delete a dependency
    1. Install
    2. Update
    3. Delete
 */

/* Question 22: Explain asynchronous and non-blocking APIs in Node.js
    All Node.js library APIs are asynchronous, which means they are also non-blocking
    A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it,
    and a notification mechanism from a Node.js event responds to the server for the previous API call.

 */

/* Question 23: Difference between fork() and spawn() methods in Node.js
    1. fork()
    - fork() is a particular case of spawn() that generates a new instance of a V8 engine.
    - Multiple workers run on a single node code base for multiple tasks.

    2. spawn()
    - Spawn() launches a new process with the available set of commands.
    - This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the
    processor.
 */

/* Question 24: Buffer class in Node.js
    Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the
    V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data
 */

/* Question 25: Piping in Node.js
    Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve
    data from one stream and pass output to another stream.

 */

/* Question 26: Difference between JavaScript and Node.js
    Node.js is a runtime environment for executing JavaScript code outside of a web browser, while JavaScript is a
    programming language that can be executed in both web browsers and Node.js environments.
 */

/* Question 27: Global objects in Node.js
    Global objects in Node.js are objects that are available in all modules without the need for an explicit require
    statement. Some of the most commonly used global objects in Node.js include process, console, and buffer.
 */

/* Question 28: Ways to avoid blocking the event loop
     There are a couple of ways to not block the main thread in NodeJS:
        1. Not using sync versions of functions in fs, crypto and zlib modules in our callback.
        2. Not performing complex calculations eg: loops inside loops
        3. Be careful with JSON in very large objects because at some point, it can start to take a long time to parse,
        or to stringify, JSON.
        4. Do not use complex regular expressions with nested quantifiers or back references, because they can take
        longer than expected.

 */

/* Question 29: NodeJs Event Loop
    The event loop is the heart of the NodeJS architecture. The event loop takes care of all the callback function which
    are in the application code. Some parts which get offloaded to the thread pool are taken care by the event loop.
    Node is an event triggered architecture so it has many callbacks functions to take care.
    The event loop does the orchestration.

    When we start our NodeJS program the event loop starts right away. The event loop has multiple phases, and each
    phase has its own callback queue, which are the callbacks coming from the thread pool that the event loop receives.

    Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when
    the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks
    in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the
    queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

    There are 4 most important phases in an event loop. There are one or two other phases that are used internally by
    Node.

    Phase 1: Expired Timer
    This phase executes callbacks scheduled by setTimeout() and setInterval(). The first phase takes care of the
    expired timers from the setTimeout() function. So, if there are callback functions from timers that just expired,
    these are the first ones to be processed by the event loop. If a timer expires later during the time when one of
    the other phases are being processed, well, then the callback of that timer will only be called as soon as the
    event loop comes back to this first phase.
    So, callbacks in each queue are processed one by one until there are no ones left in the queue, and only then, the
    event loop will enter the next phase.

    Phase 2: I/O Polling and callbacks
    So, polling basically means looking for new I/O events that are ready to be processed and putting them into the
    callback queue. I/O means mainly stuff like networking and file access, and so, it's in this phase where probably 99%
    of our code gets executed, simply because in a typical Node app, the bulk of what we need to do is related to
    networking and also, file accessing.

    The poll phase has two main functions:
        1. Calculating how long it should block and poll for I/O, then
        2. Processing events in the poll queue.
    When the event loop enters the poll phase and there are no timers scheduled, one of two things will happen:
        1. If the poll queue is not empty, the event loop will iterate through its queue of callbacks executing them
        synchronously until either the queue has been exhausted, or the system-dependent hard limit is reached.
        2. If the poll queue is empty, one of two more things will happen:
            a. If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to
            the check phase to execute those scheduled scripts.
            b. If scripts have not been scheduled by setImmediate(), the event loop will wait for callbacks to be
            added to the queue, then execute them immediately.

    Once the poll queue is empty the event loop will check for timers whose time thresholds have been reached. If one
    or more timers are ready, the event loop will wrap back to the timers phase to execute those timers' callbacks.

    Phase 3: SetImmediate Callbacks
    setImmediate is a special kind of timer that we can use if we want to process callbacks immediately after the I/O
    polling and execution phase, which can be important in some more advanced use cases.

    Phase 4:Close Callbacks
    Basically, in this phase, all close events are processed, for example, for when a web server or a WebSocket shut
    down.

    Besides these four callback queues, there are actually also two other queues, the nextTick() queue and the other
    microtasks queue, which is mainly for resolved promises. If there are any callbacks in one of these two queues to be
    processed, they will be executed right after the current phase of the event loop finishes instead of waiting
    for the entire loop to finish. So, in other words, after each of these four phases, if there are any callbacks in
    these two special queues, they will be executed right away. For example, imagine that a promise resolves and
    returns some data from an API call while the callback of an expired timer is running. So, in this case, the promise
    callback will be executed right after the one from the timer finishes and the same logic also applies to the
    nextTick() queue. This is how we finished one tick of the event loop, and a tick is basically just one cycle
    in this loop.

    Event loop is what makes asynchronous programming possible in Node.js, making it the most important feature in
    Node's design and making Node.js completely different from other platforms. We need the event loop because in
    Node.js everything works in one single thread, and so, we can have thousands or millions of users accessing the
    same thread at the same time. This makes Node so lightweight and scalable.

*/

/* Question 30: Difference between process.nextTick() and setImmediate()
    Both process.nextTick() and setImmediate() are used to execute a callback function asynchronously in the next
    iteration of the event loop. However, process.nextTick() is designed to be called recursively after completing a
    particular phase while setImmediate() is called after I/O polling phase. process.nextTick() has a higher priority
    than setImmediate().

 */

/* Question 31: Node, Libuv and V8
    Node depends on a couple of libraries to work properly. The most important ones are the V8 engine and
    libuv. V8 engine is a the reason due to which it understands javascript code which we write. V8 engine is what
    converts JavaScript code into machine code that a computer can actually understand.

    libuv is an open source library with a strong focus on asynchronous IO. This layer is what gives Node access to the
    underlying computer operating system, file system, networking, and more. libuv also implements two extremely
    important features of Node.JS which are the event loop and also the thread pool. libuv is written in C++ and V8
    is also written in C++ and a bit of Javascript. So, NodeJS is also written in C++ and Javascript.

 */

/* Question 32: What is a thread pool, and which library handles it in Node.js
    A thread pool is a collection of threads that are used to execute tasks in parallel. In Node.js, the thread pool is
    handled by the libuv library, which is a multi-platform support library that provides asynchronous I/O operations.

 */

/* Question 33: What is the use of the crypto module in Node.js
    The crypto module is widely used in Node.js applications to generate secure random numbers, create digital
    signatures, and verify signatures. It also provides support for various encryption algorithms such as AES, DES,
    and RSA.

 */

/* Question 34: Difference between setImmediate() and setTimeout()
    The setTimeout() method schedules code execution after a specified delay, measured in milliseconds. On the other
    hand, the setImmediate() method schedules code execution to occur immediately after the current event loop
    iteration completes. This means that setImmediate() has a higher priority than setTimeout().

 */

/* Question 35: What is Libuv?
    Libuv is a widely used library present in Node.js. It is used to complement the asynchronous I/O functionality of
    Node.js. It was developed in-house and used alongside systems such as Luvit, Julia, and more.

    The following are some of the features of Libuv:
        1. File system event handling
        2. Child forking and handling
        3. Asynchronous UDP and TCP sockets
        4. Asynchronous file handling and operations

 */

/* Question 36: Why does Google use the V8 engine for Node.js
    Google makes use of the V8 engine because it can easily convert JavaScript into a low-level language. This is done
    to provide high performance during the execution of an application and also to provide users with real-time
    abilities to work with the application.

 */

/* Question : Purpose of the fs module
    To read the data in a particular file we can use the fs module. In fs module we use the readFileSync method which
    processes the file in a asynchronous way.

*/