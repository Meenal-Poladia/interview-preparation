
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

/* Question : Reading and writing files
    To read the data in a particular file we can use the fs module. In fs module we use the readFileSync method which
    processes the file in a asynchronous way.

*/