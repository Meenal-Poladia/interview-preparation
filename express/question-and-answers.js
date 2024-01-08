
/* Question 1: What is Express.js
    Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add
    helpful new features. It makes it easier to organize your application’s functionality with middleware and routing;
    it adds helpful utilities to Node.js’s HTTP objects; it facilitates the rendering of dynamic HTTP objects.

 */

/* Question 2: Features of Express.js
    Express is a lightweight, minimal and flexible Node.js web application framework, it provides a robust set of
    features for web and mobile applications.

    Few features of the Express.js includes
    1. Routing: Express provides a simple way to define routes for handling HTTP requests. Routes are used to map
    different URLs to specific pieces of code, making it easy to organize your application’s logic.
    2. Middleware: Express uses middleware functions to perform tasks during the request-response cycle. Middleware
    functions have access to the request, response, and the next middleware function.
    3. HTTP Utility Methods: Express mainly used for handling HTTP methods like GET, POST, PUT, and DELETE. This makes
    it easy to define how the application should respond to different types of HTTP requests.
    4. Static File Serving: It can also serve static files, such as images, CSS, and JavaScript, with the help of
    built-in express.static middleware.
    5. Security: It includes features and middleware to strengthen the security of your web applications, such as the
    helmet middleware to secure your app.

 */

/* Question 3: How does Express.js differ from Node.js
    Node.js is a runtime for executing JavaScript, while Express.js is a framework built on top of Node.js to simplify
    web development.

 */

/* Question 4: Is Express JS a front-end or a back-end framework
    Express.js is a JavaScript backend framework. It is mainly designed to develop complete web applications and APIs.
    Express is the backend component of the MERN stack which stands for MongoDB, Express.js, React.js, Node.js.

 */

/* Question 5: Structure of an Express JS application
    The structure of an Express JS application can vary greatly depending on its complexity and the specific needs of
    the project. However, here is a basic approach that is commonly used:

    1. Entry point: This is the starting point of the application where you set up your server, connect to your
    database, add middleware, and define the main routes.
    2. Routes directory: This directory contains files for the app’s routes.
    3. Controllers directory: This directory contains files that define the logic to handle requests for a specific
    route.
    4. Models directory: This directory is used for creating the schema models for the different data.
    5. Middleware directory: This directory contains custom middleware functions that you can use in your routes.
    6. Views directory: If you’re using a templating engine, this directory contains your view templates.
    7. Public directory: This directory contains static files that are served directly by the server such as images, CSS
    files, and JavaScript files.

 */

/* Question 6: Major tools that can be integrated with Express JS
    There are many tools and libraries that can be integrated with Express.js such as:
    - Database tools: MongoDB, MySQL, PostgreSQL.
    - Template Engines: EJS, Pug, Mustache.
    - Authentication libraries: Passport.js.
    - Logging libraries: Morgan, Winston.
    - Validation libraries: Joi, express-validator.
    - ORM libraries: Sequelize, Mongoose.
 */

/* Question 7: Which are the arguments available to an Express JS route handler function
    Following are the arguments that are available to an Express.js route handler-function:
    Req: the request object
    Res: the response object
    Next (optional): It is a function employed to pass management to one of the above route handlers.

 */

/* Question 8: What is Middleware in Express.js
    Middleware is a function invoked by the Express routing layer before the final request handler.
    Middleware functions are used to perform the following tasks:

    - It is used to execute any code.
    - It is also used to make changes to the request and the response objects.
    - It is responsible for ending the request-response cycle.
    - It can call the next middleware function in the stack.

    Note: If the current middleware function does not end the request-response cycle, it must call next() to pass
    control to the next middleware function. Otherwise, the request will be left hanging.

 */

/* Question 9: Different types of Middleware
    Following are the main types of Middleware:

    - Application-level Middleware: The application-level middleware method is used to bind to the app object using
    app.use() method. It applies on all routes.

    //This middleware will execute for each route.
    app.use(function (req, res, next) {
      console.log('Current Time:', Date.now())
      next()
    })

    - Router-level Middleware: The router-level Middleware is used to bind to a specific instance of express.Router().
    Built-in Middleware: The built-in Middleware was introduced with version 4.x.
    There are the following built-in middleware functions in Express.js:
        static: It is used to serve static assets such as HTML files, images, etc.
        json: It is used to parse the incoming requests with JSON payloads. It is available with Express 4.16.0+
        urlencoded: It is used to parse the incoming requests with URL-encoded payloads. It is available with Express 4.16.0+

    - Error-handling Middleware
    - Built-in Middleware
    - Third-party Middleware
        - Body-parser
        - Cookie-parser
        - Mongoose
        - Sequelize
        - Cors
        - Express-validator

 */

/* Question 10: Some popular alternatives to Express JS
    There are several popular alternatives to Express.js which includes: Koa.js, Hapi.js, Sails.js, Fastify etc.

 */

/* Question 11: What is .env file used for
    The .env file is used for storing sensitive information in a web application which we don’t want to expose to
    others like password, database connection string etc. It is a simple text file where each line represents a
    key-value pair, and these pairs are used to configure various aspects of the application.

 */

/* Question 12: What are JWT
    Json Web Tokens are mainly a token which is used for authentication and information exchange. When a user signs in
    to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the
    assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.

    Json Web Token includes 3 part namely- Header, Payload and Signature.

 */

/* Question 13: What do you understand about ESLint
    EsLint is a JavaScript linting tool which is used for automatically detecting incorrect patterns found in
    ECMAScript/JavaScript code. It is used with the purpose of improving code quality, making code more consistent,
    and avoiding bugs.

    ESLint is written using Node.js to provide a fast runtime environment and easy installation via npm.

 */

/* Question 14: Differentiate between res.send() and res.json()
    Both res.send() and res.json() serves similar purposes with some difference. So it depends on the data type which
    we are working with.

    Choose res.json() when you are specifically working with JSON data.

    Use res.send() when you need versatility and control over the content type or when dealing with various data types
    in your responses.

 */

/* Question 15: What is meant by Scaffolding in Express JS
    Scaffolding in Express.js refers to the process of generating a basic project structure automatically. This can
    speed up the initial setup and help maintain consistency in the way projects are structured, especially in large
    teams.

 */

/* Question 16: Explain what CORS is in Express JS
    CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control how web pages in
    one domain can request and interact with resources hosted on another domain.

    In the context of Express.js, CORS refers to a middleware that enables Cross-Origin Resource Sharing for your
    application. This allows the application to control which domains can access your resources by setting HTTP headers.

 */

/* Question 17: How would you configure properties in Express JS
    In Express JS, you can configure properties using the app.set() method. This method allows you to set various
    properties and options which affects the behavior of the Express application.

    app.set(name, value);

    Here, name represents the name of the property you want to configure, and value is the value you want to assign to
    that property. Express provides a wide range of properties that you can configure based on your application’s
    requirements.

 */

/* Question 18: Various methods of debugging on both Linux and Windows systems
    The debugging is the vital need at the time of software development to identifying issues in the application’s
    logic, handling of HTTP requests, middleware execution, and other aspects specific to web development. Here are
    some methods commonly used for debugging an Express.js application on both Linux and Windows:

    - Console.log: The simplest way to debug an Express JS application is by using console.log(). You can output
    messages to the console which can be viewed in the terminal.
    - Node Inspector: This is a powerful tool that allows you to debug your applications using Chrome Developer Tools.
    It supports features like setting breakpoints, stepping over functions, and inspecting variables.
    - Visual Studio Code Debugger: VS Code provides a built-in debugger that works on both Linux and Windows. It
    supports advanced features like conditional breakpoints, function breakpoints, and logpoints.
    - Utilizing debug module: The debug module is a small Node.js debugging utility that allows you to create debugging
    scopes.

 */

/* Question 19: How would you render plain HTML using Express JS
    In Express.js, you can render plain HTML using the res.send() method or res.sendFile() method.

 */

/* Question 20: What is the use of ‘Response.cookie()’ function
    The response.cookie() function in Express.js is used to set cookies in the HTTP response. Cookies are small pieces
    of data sent from a server and stored on the client’s browser. They are commonly used to store information about
    the user or to maintain session data.

    Basic syntax of response.cookie():
    res.cookie(name, value, [options]);

 */

/* Question 21: Under what circumstances does a Cross-Origin resource fail in Express JS
    When a Cross-Origin Resource Sharing request is made, the browser enforces certain security checks, and the request
    may fail under various circumstances:

    - No CORS Headers: The server doesn’t include the necessary CORS headers in its response.
    - Mismatched Origin: The requesting origin does not match the origin specified in the Access-Control-Allow-Origin
    header.
    - Restricted HTTP Methods: The browser enforces restrictions on which HTTP methods are allowed in cross-origin
    requests.
    - No Credentials: The browser makes restrictions on requests that include credentials (such as cookies or HTTP
    authentication).

 */

/* Question 22: What is meant by the sanitizing input process in Express JS
    It involves cleaning and validating user input before using it in your application so that it does not contain
    malicious code or can be a security risk.

 */

/* Question 23: How to secure Express.Js application
    It is very important to secure your application to protect it against various security threats. We can follow few
    best practices in our Express.js app to enhance the security of our application.

    - Keep Dependencies Updated: Regularly update your project dependencies, including Express.js and other npm
    packages.
    - Use Helmet Middleware: The helmet middleware helps secure your application by setting various HTTP headers. It
    helps prevent common web vulnerabilities.
    - Set Secure HTTP Headers: Configure your application to include secure HTTP headers, such as Content Security
    Policy (CSP), Strict-Transport-Security (HSTS), and others.
    - Use HTTPS: Always use HTTPS to encrypt data in transit. Obtain an SSL certificate for your domain and configure
    your server to use HTTPS.
    - Secure Database Access: Use parameterized queries or prepared statements to prevent SQL injection attacks. Ensure
    that your database credentials are secure and not exposed in configuration files.

 */

/* Question 24: What are the different types of HTTP requests
    The primary HTTP methods are commonly referred to as CRUD operations, representing Create, Read, Update, and Delete.
    Here are the main HTTP methods:

    - GET: The GET method is used to request data from a specified resource.
    - POST: The POST method is used to submit data to be processed to a specified resource.
    - PUT: The PUT method is used to update a resource or create a new resource if it does not exist.
    - PATCH: The PATCH method is used to apply partial modifications to a resource.
    - DELETE: The DELETE method is used to request that a specified resource be removed.

 */

/* Question 25: Explain what dynamic routing is in Express.js
    Dynamic routing in Express.js include parameters, which allows you to create flexible and dynamic routes in your
    web application. This parameters are used in your route handlers to customize the behaviour based on the data
    provided.

    In Express, dynamic routing is achieved by using route parameters, denoted by a colon (:) followed by the parameter
    name.

 */

/* Question 26: The difference between req.query and req.params in Express.js
    req.query is used to access the query parameters in a URL. While req.params is used to access route parameters in a
    URL.

 */
