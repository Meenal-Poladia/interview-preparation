
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