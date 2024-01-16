
/* Question 1: What is Webpack, and what problems does it solve
    Webpack is a popular module bundler for javascript application.
    Webpack is a module bundler that takes modules with dependencies and generates static assets representing those
    modules. It solves the problem of managing and bundling numerous JavaScript, CSS, and other files into a smaller
    set of files for efficient delivery to browsers.

 */

/* Question 2: Explain the main concepts of Webpack
    - Entry: The entry point of the application where Webpack starts bundling usually index.js.
    - Output: The result of the bundling process, typically a single or multiple files.
    - Loader: Modules that transform or process files before adding them to the bundle.
    - Plugin: Modules that perform tasks such as code optimization, asset management, and more. For example: uglify.
    - Module: Any file, including JavaScript, CSS, or images, that Webpack can understand and process.

 */

/* Question 3: What is the purpose of loaders in Webpack
    Loaders in Webpack are used to process files before they are added to the bundle. They transform file content,
    apply transformations (e.g., Babel for JavaScript), or load assets like images and fonts.

 */

/* Question 4: How do you configure Webpack
     Webpack is configured using a JavaScript configuration file (usually named webpack.config.js). This file specifies
     the entry point, output configuration, and various loaders and plugins.

 */

/* Question 5: Explain the role of the webpack-dev-server
    webpack-dev-server is a development server for Webpack that provides features like live reloading, hot module
    replacement, and a simple HTTP server. It allows developers to see changes in real-time while developing without
    manually refreshing the browser.

 */

/* Question 6: What is code splitting in Webpack, and how is it achieved
     Code splitting is a technique in Webpack where the application code is split into smaller chunks that can be
     loaded on demand. It reduces the initial load time and allows for more efficient use of resources. Code splitting
     can be achieved using dynamic imports or Webpack's SplitChunksPlugin

 */

/* Question 7: Explain the purpose of the CommonsChunkPlugin in Webpack.
    The CommonsChunkPlugin is used to extract common code shared between multiple entry points into a separate file,
    known as the common chunk. This helps in optimizing the bundle size and reducing redundancy.

 */

/* Question 8: What is Tree Shaking in Webpack
    Tree shaking is a feature in Webpack that eliminates dead code from the final bundle. It identifies and removes
    unused exports from modules, reducing the size of the bundle.

 */

/* Question 9: How does Webpack handle CSS files
    Webpack can handle CSS files using style loaders and CSS loaders. Style loaders inject styles into the DOM, while
    CSS loaders allow importing CSS files into JavaScript files.

 */

/* Question 10: Explain the difference between webpack and webpack-dev-server
    webpack is the module bundler that bundles and optimizes the code, while webpack-dev-server is a development server
    that serves the bundled code. webpack-dev-server also provides features like hot module replacement and live
    reloading during development.

 */