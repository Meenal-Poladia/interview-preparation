/* Question 1: What is Javascript?
    JavaScript is a versatile programming language commonly used for creating interactive and dynamic content on the
    web. It is a high-level, interpreted language that enables developers to manipulate the DOM.

    Javascript follows the standards set by ECMAScript which makes it standardised to be run across different
    browsers.

    Key Features:
    1. Client side scripting: Allows developers to write code that runs in the browser and interacts with the
    Document Object Model (DOM) to manipulate web page elements.
    2. Object Oriented: JavaScript follows an object-oriented programming paradigm, supporting concepts like objects,
    classes and inheritance. However, it is a prototype-based language rather than class-based.
    3. Event Driven: Meaning it can respond to user actions (such as clicks and keyboard inputs) and execute specific
    code in response to those events.
    4. Asynchronous Programming: supports asynchronous programming through features like callbacks, Promises, and the
    async/await syntax. This is crucial for handling tasks such as fetching data from servers without blocking the
    execution of other code.
    5. Cross-Platform: JavaScript is not limited to web browsers. It can also help to develop server-side development,
    using NodeJs allowing developers to create full-stack applications using a single language.
*/

/* Question 2: Types of operators in javascript? BAC LAS
    1. Arithmetic Operators
    2. Comparison (Relational) Operators
    3. Bitwise Operators
    4. Logical Operators
    5. Assignment Operators
    6. Special Operators

*/

/* Question 3: Datatypes in Javascript?
    1. Primitive data type - Bunns
    - These are basic data types provided by the programming language, and they are directly supported by the language
    itself. Examples include integers, floating-point numbers, characters, booleans, etc.
    - They store the actual values.
    - Memory is allocated on the stack.
    - When assigning a primitive data type to a variable, the actual value is copied.
    - They have fixed sizes depending on the type.
    - Pass by value

        ■	String - represents sequence of characters e.g. "hello"
        ■	Number - represents numeric values e.g. 100
        ■	Boolean  - represents boolean value either false or true
        ■	Undefined - represents undefined value
        ■	Null - represents null i.e. no value at all

    2. Non-primitive (reference) data type
    - These data types are not predefined by the language but are created by the programmer using classes or structures.
     Examples include arrays, objects, strings, etc.
    - They store references (memory addresses) to where the data is stored in memory.
    - Memory is allocated on the heap.
    - When assigning a reference data type to a variable, the reference (memory address) is copied, not the actual
    object.
    - The size depends on the size of the object they refer to, as well as additional overhead for the reference itself.
    - Pass by reference

        ■	Object - represents instance through which we can access members
        ■	Array - represents group of similar values
        ■	RegExp - represents regular expression

*/

/* Question 4: Difference between undefined and null?
    Null and undefined are primitive data type values. They both are falsy values.

    Undefined means the default value of a variables that are declared but not assigned a value. Function parameters
    that are not provided with a value default to undefined. The typeOf undefined is undefined.

    Null is often explicitly assigned to variables or object properties to signify that they intentionally have no
    value. The typeOf null is object.

    If we don’t assign any value to variable javascript automatically assigns it undefined value and if we assign
    a variable as null it means that we are setting the variable empty.

*/

/* Question 5: Type conversion and type coercion?
    Type conversion is when we manually convert a variable from one data type to another. eg: To manually convert
    strings to numbers, use the Number() constructor

    Type coercion happens whenever an operator is dealing with two values that are of different types.
    In this javascript will automatically convert the data type of another variable to another for comparison. Type
    coercion depends on the operator being used.
    + coerces to string
    > and - and *  and / coerces to number

*/

/* Question 6: Truthy values and falsy values? Falsy: neun0F
    In JS there are 6 falsy values 0, '', undefined, null, NaN and of course false itself. These values are not false
    initially but will be converted to false when converting them to boolean.

    Objects are truthy values.

    JS performs type coercion to booleans in two cases:
        1. when using operators.
        2. when using if blocks.
*/

/* Question 7: Types of Comment

Single line comment in javascript is //
Multiline comment in javascript

 */

/* Question 8: Let, const and var
    These are 3 ways of declaring variables in JS. Let and const were introduced in ES6, and so they are modern
    JavaScript. While the var keyword is the old way of declaring variables.

    1. Let
    - It is Block scoped variable.
    - When declaring a variable using let, we can reassign a value to the variable or mutate its value.
    - We also use let when we want to declare a variable but assign a value later to it.

    2. Const
    - It is also a Block scoped variable.
    - When declaring a variable using the const keyword, the value of the variable cannot be changed.
    - Unlike let we cannot declare a const variable and assign it a value later. Its value is immutable.

    3. Var.
    - This is the old way of declaring variables.
    - Like let we can declare a variable using the var keyword and assign it a value later.

 */

/* Question 9: Prefer Let and Const over Var

    1. Block Scoping
    Variables declared with let and const have block-level scope, meaning they are only accessible within the block
    (enclosed by curly braces) in which they are defined.
    var has function-level scope, leading to potential issues with variable hoisting and unintended access outside of
    blocks.

    2. Reassignment (Mutability)
    Variables declared with const cannot be reassigned after initialization. This helps prevent accidental
    reassignments and makes the code more predictable.
    let allows for reassignment, providing flexibility when the variable's value needs to change.

    3. Global Object Property
    Variables declared with var at the global scope become properties of the global object (window in browsers).
    This can lead to unintended global variable pollution.
    let and const declarations at the global scope do not create properties on the global object.

    4. Temporal Dead Zone (TDZ)
    let and const variables are in the "Temporal Dead Zone" from the start of the block until the actual declaration.
    This helps catch potential issues related to accessing variables before they are declared.
    var does not have this Temporal Dead Zone behavior, which can lead to subtle bugs.

 */

/* Question 10: What is anonymous function?
    An anonymous function is a function without a name. An anonymous function is often not accessible after its
    initial creation.
    Eg. let show = function () { console.log('Anonymous function');}; show()

 */

/* Question 11: Async and Defer Javascript

    When using async in <script> tag as <script async>, the browser will download the file and do the HTML
    parsing at the same time. Once the download completed, it will pause the HTML execution and run the script.

    Now if we use defer as <script defer>, the browser downloads the script during the HTML parsing, but only execute
    the script after the parser has completed.

 */

/* Question 12: Equality Operators

    == is called loose equality operator
    === is called strict equality operator

    == returns true if the value on both the sides of the operand have the same value.
    === returns true if the values on both the sides of the operand are of the same data type and the value.
 */

/* Question 13: Some ES6 features
    1. Let and const keyword to declare variables
    2. Arrow functions
    3. Template literals
    4. Destructuring array or objects
    5. Promises
    6. Spread Operator
 */

/* Question 14: What are Primitive and Reference Data types
    1. Primitive Data types
    - Values once assigned are immutable.
    - They are stored against an identifier.
    - To assign a new value means creating a new address and pointing the identifier to the new address. That is why
    the old variable holds the copied value while the newly assigned variable holds a new value.
    - Bunns are primitive data types.

    2. Reference Data types
    - Reference data types are stored in heap memory because objects can be large and will fill up the stack memory
    quickly if they are stored there.
    - When a new object is created it is stored in the heap memory and is given an address.
    - When we change the value of the object in the heap the changes are reflected across all the objects that hold a
    copy of the referred heap memory address.
    - That is why these constructs are called reference values.
    They refer to the address in the Heap memory from the call stack and not from the call stack itself.
    The copy in the way mentioned in step 2 only copies the reference and not the object.
 */

/* Question 15: Create a shallow copy of an object

    Object.assign(targetObj, ...sourceObjs) returns the target obj

    This only creates a shallow copy in the sense that it does not copy deeply nested properties.
    For copying deeply nested properties you need a deep copy which can be done by external libraries
    like lodash

 */

/* Question 16: Engine and runtime
    JS needs a runtime to execute inside of. When it is running in the browser the browser becomes its runtime and when
    it is running in Node, the Node becomes its runtime. Inside this runtime is an engine which executes the compiled/
    interpreted JS code. Chrome's JS engine is called as V8. It is the same one as Node. Other browsers use different
    engines. There are 3 main components of an engine:

    1. Call Stack and Heap
    The call stack holds the current execution context (EC). The EC are placed on top of each other with the most
    recent EC at the top of the stack. The heap is used for storing objects and acts as a memory store for the
    running program.

    2. Web API's
    The web API's are provided by the browser for manipulating the DOM. The web API's are different for Node.

    3. Callback Queue - Non Blocking Event Loop
    The Callback Queue holds the callbacks for events and asynchronous activities. These events and activities are
    held separately and executed once the main thread becomes free. It is non blocking in the sense that it lets the
    main thread finish its execution and then looks into the Callback Queue to check if any callbacks are waiting for
    execution.

 */

/* Question 17R: Compilation, Interpretation and Just In Time compilation
    1. Compilation
    Compilation is the process of translating the entire source code of a program into machine code or an intermediate
    code (e.g., bytecode) all at once.
    The resulting compiled code is a standalone executable file.

    2. Interpretation
    Interpretation involves executing a program directly without a prior translation of the entire source code.
    An interpreter reads and executes the source code line by line or statement by statement.

    3. Just-In-Time (JIT) Compilation
    Entire code is converted into machine code at once, then executed immediately.

    Summary:
    Compilation is the process of translating source code into machine code before execution, interpretation involves
    directly executing the source code without prior translation, and Just-in-Time compilation dynamically translates
    code into machine code during execution for improved performance.

 */

/* Question 18R: Execution Context
    The JS EC(Execution Context) is the area that is created when the JS program starts execution. Every EC goes
    through a creation phase where it looks for variables for hoisting.

    At first the global execution context is created which encompasses the whole file. Then as new functions are called
    each function creates its own EC which gets placed on top of the call stack.

    As the functions continue their execution, new ECs get put on top of the stack. When a function completes its
    execution the EC is popped from the stack and control returns to the previous item in the stack.

    In this way, control eventually returns to the global EC (which is the first EC) that was created.

    The global EC is never popped from the stack as long as the program is running. It is only removed when the program
    stops. Eg. when the browser window is closed.

    An EC contains

    1. Variable Environment
    It holds the variables declared in this context, functions and arguments

    2. Scope chain
    It contains references to the methods that have called upon the present EC.

    3. this keyword
    Special keyword

    Note: arrow functions do not have this and arguments

 */

/* Question 19: Hoisting
    Hoisting makes some types of variables accessible/usable in the code before they are actually declared.

    Behaviours of various constructs on hoisting:

    1. Function declarations
    Hoisted: Yes
    Initial Value: Actual Function
    Scope: Block (Strict Mode - otherwise loose scoped)

    2. var variables
    Hoisted: Yes
    Initial Value: undefined (Weird but true) -> See example 1
    Scope: Function

    3. let and const variables
    Hoisted: No
    Initial Value: uninitialized <Temporal Dead Zone>
    Scope: Block

    4. Function expressions
    Hoisted: Depends on whether they are declared with let or var

 */

/* Question 20:Temporal Dead Zone

    Temporal Dead Zone is the area of the code where let or const are inaccessible.

    Why TDZ?
    Makes it easier to avoid and catch errors
    Makes const variables work as expected

 */

/* Question 21R: This keyword
    The this keyword is a special variable that is created for every EC (function).
    This keyword points to the owner of the function.

    The this keyword is dynamic and it changes based on who or where it is used.
    There are 4 different ways in which this may be used.

    1. Inside methods (Functions attached to objects)
    this refers to the object from within which the method is called. --> See Example 1

    2. Simple function call
    this = undefined (only in strict mode)
    otherwise this points to window object and this can cause bugs.

    3. Arrow functions
    Do not have their own this. this inside arrow functions refers to the this of surrounding function OR lexical this

    4. Event Listener
    this refers to the DOM Element the handler function is attached to

    Important to note that:
    this will never point to the function that we are executing it in AND
    this will never point to the Variable Environment


 */

/* Question 22R: Regular and arrow function
    They differ in:
    1. Syntax
    2. this KW - In a object with an arrow function we can this takes the surrounding scope. In a function declaration
    this refers to the function.
    3. Writing return inside the function - In an arrow function if there is just one expression that we need to return
    then we do not need to write the return KW while in function declaration we need to write the return KW.

 */

/* Question 23: Spread and Rest Operator

    Rest Operator: Gathers remaining elements into an array, typically used in function parameters or destructuring.
    Spread Operator: Expands elements of an iterable into individual elements, commonly used in array literals,
    object literals, or function arguments.

    While both operators use the same syntax (...), their roles are different: rest collects elements into an array,
    while spread expands elements from an iterable

 */

/* Question 24: Nullish Coalescing
    When using the short circuit operator, false values like 0 and '' evaluate to false and hence
    could lead to potential errors even when they could be valid values in certain scenarios. -> See example 1

    This problem is solved by the nullish coalescing operator which moves to the next value
    in the chain only if the value on the left is undefined or null.

    // Example 1
    restaurant.numGuests = 0;
    const guests = restaurant.numGuests || 10; // this returns 10 even though 0 is a valid value for numGuests
    console.log(guests); // prints 10

    // Example 2
    // Nullish: null and undefined (NOT 0 or '')
    const guestCorrect = restaurant.numGuests ?? 10; // when numGuests is 0 it sets the const to 0, if undefined it will set to 10
    console.log(guestCorrect);

 */

/* Question 25R: Enhanced Object Literals
    With enhanced object literals you can now directly add existing properties to objects that share the same name as
    an existing variable in the same scope.

 */

/* Question 26: Sets
    Sets can hold values of any data types just like arrays. They can also hold mixed data types.
    Sets are iterable data structures in JS which store only unique values (no duplicates).

    Some of the functions that can be called on a set are:
    1. size - to know the length of the set
    2. has - to know if the value exists
    3. add - to add a value in the existing set
    4. delete - to delete a value in the existing set
    5. for...of - to loop over the set
    6. ...new Set(setName) - to create an array into a set
 */

/* Question 27: Maps
    A map is a data structure that we can use to map values to keys.
    So, just like an object data is stored in key value pairs in maps.

    The big difference between objects and maps is that in maps, the keys can have any data type
    whereas in objects, the keys are basically always strings. It could even be objects, or arrays, or other maps.

    Some of the functions that can be called on a set are:
    1. set - to add a key value pair on the map
    2. get - to get the key value pair on the map. If the key does not exist then it returns undefined.
    3. has - to check if the key value pair exists on the map
    4. delete - to remove a key value pair from the map
    5. clear - to delete the map
    6. forEach - to loop over map or use .entries

 */

/* Question 28: Creating a map from Array
let map = new Map([
  ["1", "first element"],
  [1, "second element"],
  [true, "hello world"]
]);

let newIterable = map.entries(map);
//return iterable with [key,value] pairs

let newArray = Array.from(newIterable);

 */

/* Question 29: Creating a map from Object
let obj = {
	"name": "hackinbits",
	"type": "website"
}
let newArray = Object.entries(obj)

let map = new Map(newArray);

 */

/* Question 30: ES2021 features

    1. Logical Assignment Operator
        &&= – Logical And Assignment
        ||= – Logical Or Assignment
        ??= – Nullish coalescing operator.
    2. ReplaceAll
    3. Promise.any
    4. Numeric Separator(_)

 */

/* Question 31: Functions as First class citizen

    It means that functions can be treated like other variables, object or data types.
    1. They can be assigned to other variables.
    2. They can be passed as an argument to other functions.
    3. Functions can be returned from other functions
    4. Functions can be stored in data structures, such as arrays or objects.

 */

/* Question 32: Functions as Higher Order Functions
    A higher-order function is a function that takes one or more functions as arguments or returns a function as its
    result. Higher-order functions enable the composition of functions, allowing for more modular and reusable code.

 */

/* Question 33: Call, apply and bind
    In JS, the call, apply, and bind methods are used to manipulate how a function is invoked and to control the value
    of this within the function. These methods are often referred to as function methods.

    1. Call Method
    The call method is used to invoke a function with a specified this value and individual arguments provided as
    separate parameters.

    2. Apply Method
    The apply method is similar to call, but it takes an array-like object as the second argument, where each element
    of the array corresponds to an argument passed to the function.

    3. Bind Method
    The bind method creates a new function with the same body as the original function but a fixed this value and
    partially applied arguments.

    - call and apply invoke the function immediately, while bind returns a new function that needs to be invoked
    separately.
    - call takes individual arguments, while apply takes an array of arguments.
    - bind allows you to create a partially applied function with a fixed this value.

 */

/* Question 34: IIFE's (Immediately Invoked Function Expression)
    IIFE's are only executed once in their lifecycle. So basically this function disappears right after it's called
    once and does not execute again.
    IIFEs create their own scope and this scope is destroyed when the function executes and finishes.

    Purpose of IIFE:
    1. Encapsulation: Variables declared inside an IIFE are not accessible from the outside. This helps avoid naming conflicts
    and keeps the global scope clean.
    2. Avoiding Global Pollution: By encapsulating code within an IIFE, you reduce the risk of unintentional variable
    collisions in the global scope.

 */

/* Question 35: Closure
    A closure makes a function remember all the variables that existed at the function's birthplace.
    A function always has access to the variable environment of the execution context in which it was created,
    even after that execution context is gone.

    So in a sense, the scope chain is actually preserved through the closure, even when a scope
    has already been destroyed because its execution context is gone. This means that even though
    the execution context has actually been destroyed, the variable environment somehow keeps living
    somewhere in the engine.

    Example:
    function init() {
      const name = "Mozilla";
      function displayName() {
        console.log(name);
      }
      displayName();
    }
    init();

 */

/* Question 36R: Difference between for...of and forEach loop

    1. Breaking the loop
    The for...of loop supports the break statement for breaking out of the loop prematurely. The forEach method does
    not support breaking out of the loop (like using break in a regular for loop).

    2. Return Value
    forEach always returns undefined. It is possible to return a value using the for...of loop.

    3. Use Case
    Use forEach when you specifically want to iterate over the elements of an array. Use for...of when you need more
    flexibility and want to iterate over values of any iterable object.

 */

/* Question 37: Difference between for..in and for..of loop

    1. Iterating Over:
        for...in iterates over enumerable properties (keys) of an object.
        for...of iterates over the values of an iterable.
    2. Order of Iteration:
        for...in does not guarantee a specific order of iteration over object properties.
        for...of guarantees the order of iteration based on the iterable's defined order.
 */

/* Question 38R: How do you check if a variable is an object?
    typeOf(value) === 'object' && value !== null && !Array.isArray(value)
*/

/* Question 39: Event Bubbling and event capturing
    Event bubbling and event capturing are two phases of the event propagation process in the Document Object Model
    (DOM) in web development.

    1. Event Bubbling:
    Direction: Bubbling occurs from the target element up to the root of the DOM.
    Order: The innermost element's handler is executed first, then the handler of its parent, and so on, until the
    outermost ancestor's handler is executed.

    2. Event Capturing:
    Direction: Capturing occurs from the root of the DOM down to the target element.
    Order: The outermost ancestor's handler is executed first, then the handler of its child, and so on, until the
    innermost element's handler is executed.

 */

/* Question 40R: Event Flow
    Events in the DOM follow a three-phase flow: capturing, target, and bubbling.
    The capturing phase happens first, then the target phase, and finally the bubbling phase.
    Not all events have all three phases; some events may skip either the capturing or the bubbling phase.

 */

/* Question 41: What is Event.stopPropagation()?
    This method can be used to stop the event from propagating further, either up (bubbling) or down (capturing) the
    DOM.

 */

/* Question 42: Difference between e.preventDefault() and e.stopPropagation()
    e.preventDefault() and e.stopPropagation() are both methods that can be called on the event object (e) in JS when
    handling events.

    1. e.preventDefault():
    Purpose: This method is used to prevent the default action associated with an event. Default actions are the
    browser's built-in behaviors that occur when certain events take place.
    For example, clicking a link navigates to a new page, submitting a form sends data, and pressing the spacebar
    scrolls down.

    2. e.stopPropagation():
    This method is used to stop the event from propagating further through the DOM hierarchy. It prevents the event
    from reaching other event listeners on the same element or from propagating up (bubbling) or down (capturing) the
    DOM.

 */

/* Question 43: OOP in JS
      A class is like a blueprint which can be used to create instances. This process of creating objects is called
      instantiation.

 */

/* Question 44: 4 Properties of OOP
    1. Inheritance
    2. Encapsulation
    3. Abstraction
    4. Polymorphism

    The 4 fundamental principles of OOP are Abstraction, Encapsulation, Inheritance and Polymorphism.

    Abstraction means to ignore or to hide details that don't matter. This allows us to get an overview perspective
    of whatever it is that we're implementing instead of messing with details that don't really matter to our
    implementation.

    Encapsulation means keeping some properties and method private inside the class so they are not accessible from
    outside the class. Some methods can be exposed as a public interface(API).

    Inheritance makes all properties and methods of a class accessible to all child classes. It thus, creates a
    hierarchical relationship between classes. This allows us to reuse common logic.

    Polymorphism means a child class can overwrite a method inherited from a parent class.

    Note: Javascript does not support real classes. It does have the syntax that looks like it is creating
    real classes, however that is not the case.

 */

/* Question 45: Callback hell
    Callback hell, also known as "pyramid of doom" or "callback spaghetti," is a situation in asynchronous programming
    where multiple nested callback functions make the code hard to read, understand, and maintain.
    Each asynchronous operation is nested within the callback of the previous operation. As more asynchronous
    operations are added, the code indentation grows deeper, making it difficult to follow the logic.

    Disadvantages of Callback hell
    1. Readability
    2. Maintainability
    3. Error Handling
    4. Debugging

 */

/* Question 46: Promises and Async/Await
    These are two techniques introduced by JS to avoid callback hell

    1. Promises
    Promises provide a more structured way to handle asynchronous operations. We can chain promises using .then() to
    avoid deep nesting. Promises also have a .catch() method for centralized error handling.

    2. Async/Await
    Async/await is a syntactic sugar built on top of promises. It allows you to write asynchronous code in a more
    synchronous style, making it easier to read and understand.

 */

/* Question 47: Read about Event Loop

 */

/* Question 48: Event Loop
    The event loop is a fundamental concept in JavaScript that enables it to handle asynchronous operations. JS is
    single-threaded, meaning it can only execute one operation at a time. However, it often needs to deal with
    asynchronous tasks like user input, network requests, and timers. The event loop helps manage these asynchronous
    operations efficiently.

    There are few important concepts to understand event loop:
    1. Call Stack
    The call stack executes the current EC. Functions are added to the stack when they are called and removed when they
    complete.
    2. Callback Queue
    When an asynchronous task is completed, a callback function is placed in a callback queue.
    3. Microtask Queue
    Callbacks related to promises do not go into the callback queue. Instead, they have a special queue which is
    called the microtasks queue. What is special about the microtasks queue is that it has priority over the callback
    queue.

    The event loop continuously checks the call stack. If the call stack is empty, the event loop takes the callback
    from the microtask queue if any. After executing this it goes to the callback queue, if there are any callbacks
    then pushes it onto the call stack, allowing it to execute. In this way the event loop works as an orchestrator
    and making sure that EC is never blocked. The EC is never empty as the control goes to the Global Execution COntext
    once the callbacks are executed.
    The Global Execution Context is destroyed only once the program is closed.

 */

/* Question 49: Try and Catch
    To catch errors when using async/await we can use try and catch block. When using fetch and async/await it does not
    consider 404 as error so we have to write a if statement where we capture if the response is ok and accordingly
    respond.

 */

/* Question 50: Static methods on Promise constructor
    1. Promise.all()
    - Promise.all() waits for all promises to settle (either fulfill or reject).
    - If any of the input promises is rejected, the returned promise will be immediately rejected with the reason of
    the first rejected promise encountered.
    - The promises in the iterable are executed in parallel, not sequentially.
    - Useful when you have multiple asynchronous tasks that can be performed concurrently, and you want to wait for all
    of them to complete before proceeding.

    2. Promise.allSettled()
    - Unlike Promise.all(), Promise.allSettled() never rejects. It waits for all promises to settle, regardless of
    whether they fulfill or reject.
    - Each result object in the array has a status property with a value of "fulfilled" or "rejected".
    - If the promise was fulfilled, there is a value property containing the fulfillment value.
    - If the promise was rejected, there is a reason property containing the rejection reason.
    - Useful when you want to wait for all promises to complete, whether they are fulfilled or rejected, and gather
    information about their outcomes.

    3. Promise.any()
    - Promise.any() returns the value of the first promise in the iterable that fulfills, regardless of the order in
    which promises are specified.
    - If all promises are rejected, Promise.any() rejects with an AggregateError containing an array of rejection
    reasons. If any promise is fulfilled, the result is the fulfillment value of that promise.
    - Useful when you want to wait for the first promise to fulfill among a set of promises.

    4. Promise.race()
    - The order in which promises are specified in the iterable does not affect the result. The first promise to settle
    (either fulfill or reject) determines the result.
    - It is called "race" because it races to fulfill or reject based on the first settled promise.
    - It's commonly used for scenarios where you want the fastest response among multiple asynchronous operations.

    5. Promise.catch()
    - The catch() method of Promise instances schedules a function to be called when the promise is rejected. It
    immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

    6. Promise.finally()
    - The finally() method of Promise instances schedules a function to be called when the promise is settled (either
    fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other
    promise methods.
    - This lets you avoid duplicating code in both the promise's then() and catch() handlers.

    7. Promise.resolve()

    8. Promise.reject()

 */

/* Question 51: Build process
    The build process is complex and it will almost always involve the following steps apart from others:

    1. Bundling - In this we combine all our modules together into one big file. This is a pretty complex process which
    can eliminate unused code and compress our code as well. This step is important for two big reasons. First,
    older browsers don't support modules at all so code that's in a module cannot be executed by any older browser.
    Second, it's better for performance to send less files to the browser to download and execute.

    2. Transpiling & Polyfilling - In the second step we do something called transpiling and polyfilling, which is
    basically converting all modern JavaScript syntax and features back to old ES5 syntax so that even older browsers
    can understand our code without breaking. This step is usually done using a tool called Babel.

    We don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us.
    The most common build tools available, are probably webpack and parcel. They are called bundlers.

 */

/* Question 52: Object traversal and looping

    For keys:                   Object.keys(myObj) and then for...of loop
    For values:                 Object.values(myObj) and then for...of loop
    For both keys and values:   Object.entries(myObj) and then for...of loop
    for...in:                   for(const property in obj) console.log(property + obj[property])

 */

/* Question 53: Useful Object methods

    Object.assign(target, ...sources) - Copies the values of all enumerable own properties from one or
                                        more source objects to a target object. Creates a shallow copy
                                        of the object.

    Object.create(proto) -              Creates a new object with the specified prototype object and properties.

    Object.entries(obj) -               Returns an array containing all of the [key, value] pairs of a given
                                        object's own enumerable string properties.

    Object.keys(obj) -                  Returns an array containing the names of all of the given object's
                                        own enumerable string properties.

    Object.values(obj) -                Returns an array containing the values that correspond to all of a
                                        given object's own enumerable string properties.

    Object.freeze(obj) -                Freezes an object. A frozen object can no longer be changed. Freezing an
                                        object prevents new properties from being added to it and existing properties
                                        from being removed. Only shallow freezes an object.

    Object.getOwnPropertyNames(obj) -   Returns an array containing the names of all of the given object's
                                        own enumerable and non-enumerable properties.

    Object.defineProperty(obj, prop, -  Adds the named property described by a given descriptor to an object.
    descriptor)                         Can be used to add enumerable and non enumerable property to the object.

 */

/* Question 54: Useful String methods

    toUpperCase(), toLowerCase() -              Converts the string to upper/ lower case

    replace(), replaceAll() -                   Replaces one/ all occurrences of the passed substr with the newSubstr
    Params - substr, newSubstr                  replacer string

    split() -                                   Generates an array of strings by breaking up the string using the
    Params - separator                          passed separator parameter

    substring(), slice() -                      Returns the part of the string between the start(inclusive) and
    Params - startIndex, endIndex               end(excluding) indexes, or to the end of the string.

    repeat() -                                  Constructs and returns a new string which contains the specified number
    Params - count                              of copies

    indexOf(), lastIndexOf() -                  Returns the first/ last index of passed searchValue in current string
    Params - searchValue

    padStart(), padEnd() -                      Pads the current string with the padString parameter (repeated,
    Params - targetLength, padString            if needed) so that the resulting string reaches a given length.
                                                The padding is applied from the start/ end of the current string.

    includes(), startsWith(), endsWith() -      Returns a boolean notifying if the string contains/ starts with/
    Params - substring                          ends with the passed substring parameter

    trim(), trimStart(), trimEnd() -            The trim/ trimStart/ trimEnd methods removes whitespace from
                                                everywhere/ beginning/ end of a string.
 */

/* Question 55: Useful Array methods

    slice() -                                   Returns returns a shallow copy of a portion of an array into a new
    Params - startIndex, endIndex               array object  between the start(inclusive) and
                                                end(excluding) indexes, or to the end of the array.
                                                Does not mutate array.

    splice() -                                  Changes the contents of an array by removing or replacing existing
    Params - start, deleteCount                 elements

    reverse() -                                 Reverses an array in place. The first array element becomes the last,
                                                and the last array element becomes the first.

    concat() -                                  Merges two or more arrays. This method returns a new array.
    Params - value0, value1, ...

    join() -                                    Returns a new string by concatenating all of the elements in an array
    Params - separator                          separated by commas(default) or a specified separator string

    map() -                                     Creates a new array populated with the results of calling a provided
    Params - mapper callback                    function on every element in the calling array

    filter() -                                  Creates a new array with all elements that pass the test
    Params - filter callback                    implemented by the provided function


    reduce() -                                  Executes a user-supplied “reducer” callback function on each element of
    Params - reducer callback, accumulator      the array, passing in the return value from the calculation on the
                                                preceding element. The final result of running the reducer across all
                                                elements of the array is a single value.

    push()                                      Adds one or more elements to the end of an array and
    Params - ...elements                        returns the new length of the array.

    pop() -                                     Removes the last element from the array and returns it

    unshift() -                                 Adds one or more elements to the beginning of an array and
    Params - ...elements                        returns the new length of the array.

    shift() -                                   Removes the first element from an array and returns that removed element.
                                                This method changes the length of the array.


    indexOf(), lastIndexOf() -                  Returns the first/ last index of passed searchElement in current array
    Params - searchElement, fromIndex?          and returns -1 if not found. Tests for equality.

    find(), findIndex() -                       Returns the value/ index of the first element in the provided array
    Params - find callback                      that satisfies the provided find function. Tests for condition

    includes() -                                Determines whether an array includes a certain value among its entries,
    Params - searchElement, fromIndex?          returning true or false as appropriate. Tests for equality.

    some(), every() -                           Tests whether at least one/ every element(s) in the array pass the test
    Params - search callback                    implemented by the provided function. It returns true if, in the array,
                                                it finds an element for which the provided function returns true;
                                                otherwise it returns false. It doesn't modify the array.
                                                Tests for condition

    flat() -                                    Creates a new array with all sub-array elements concatenated into it
    Params - depth                              recursively up to the specified depth.


    flatMap() -                                 Returns a new array formed by applying a given callback function to
    Params - map callback                       each element of the array, and then flattening the result by one level.

    sort() -                                    Sorts the elements of an array in place and returns the sorted array.
    Params - sort callback                      The sort callback helps to sort non string or complex values.

 */

/* Question 56: Useful Number methods

    // constructor
    Number() -                                  Number is a primitive wrapper object  used to represent and manipulate
    Params - value                              numbers like 37 or -9.25. Values of other types can be converted to
                                                numbers using the Number() function. It is a double-precision 64-bit
                                                binary format IEEE 754  value. This means it can represent fractional
                                                values, but there are some limits to what it can store.

    parseInt() -                                Parses a string argument and returns an integer of the specified
    Params - valueInString, radix               radix or base. The value must start with a number else the result is
                                                NaN. The default radix is 10. Passing a string with floating point
                                                number in it will result in an integer without the fractional part.

    parseFloat() -                              Parses an argument and returns a floating point number. If a number
    Params - valueInString                      cannot be parsed from the argument, it returns NaN.

    toFixed() -                                 Formats a number such that it becomes a floating point number.
    Params - digits                             Rounds of the newly created number to the number of digits mentioned
                                                in the argument. 0 represents no decimal values. Returns a string
                                                instead of number

    isNaN() -                                   Determines whether the passed value is NaN and its type is Number.
    Params - valueToTest                        It is a more robust version of the original, global isNaN().

    isFinite() -                                Determines whether the passed value is a finite number — that is,
    Params - valueToTest                        it checks that the type of a given value is Number, and the number
                                                is neither positive Infinity, negative Infinity, nor NaN. This is
                                                a better check than isNaN to check if a value is an Number or not.

    isInteger() -                               Determines whether the passed value is an integer.
    Params - valueToTest

 */

/* Question 57: Useful Math methods

    sqrt() -                                    Returns the square root of the passed number.
    Params - number

    max() -                                     Returns the largest of the zero or more numbers given as input
    Params - value0, value1, ...                parameters, or NaN if any parameter isn't a number and can't be
                                                converted into one.

    min() -                                     Returns the lowest-valued number passed into it, or NaN if any
    Params - value0, value1, ...                parameter isn't a number and can't be converted into one.


    random() -                                  Returns a floating-point, pseudo-random number in the range 0 to less
                                                than 1 (inclusive of 0, but not 1)

    trunc() -                                   Returns the integer part of a number by removing any fractional digits.
    Params - number

    round() -                                   Returns the value of a number rounded to the nearest integer.
    Params - number                             It performs type coercion.

    ceil() -                                    Always rounds a number up to the next largest integer. It performs
    Params - number                             type coercion

    floor() -                                   Returns the largest integer less than or equal to a given number.
    Params - number                             It performs type coercion.

 */

/* Question 58: ES updates

    Additions to JS as per new updates

    ES6 (ES2015)
    1. let, const
    2. Arrow functions
    3. Template literals
    4. Object and array destructuring
    5. Promises
    6. Default function parameters
    7. Class syntax
    8. Rest parameter and spread operator
    9. Modules import and export
    10. for...of loop syntax


    ES7 (ES2016)
    1.  Exponentiation operator - 10 ** 3
    2.  Array.prototype.includes method - [1,2,3].includes(1)


    ES8 (ES2017)
    1. async/await
    2. Object.entries and Object.values static methods
    3. String padding myString.padStart(2) or myString.padEnd(2);
    4. Trailing comma function test(a,b,c, )


    ES9 (ES2018)
    1. Asynchronous iteration - for await (const line of readlines(filePath)) {}
    2. Rest operators can be used as last items in function params - function restParamsEx(p1, p2, ...p3)
    3. Promise.prototype.finally method
    4. Spread operators on objects


    ES10 (ES2019)
    1. Array.prototype.flat and Array.prototype.flatMap methods
    2. Object.fromEntries static method - reverse operation from Object.entries (see here)
    3. String.prototype.trimStart and String.prototype.trimEnd methods- Remove extra spaces in a string
    4. Optional Catch binding: remove the need to add a param to the catch (Now you can do } catch {instead of }
    catch(e) {}
    5. Function.prototype.toString method - returns string representation of function source code


    ES11 (ES2020)
    1. Private class variables class Person { #dateOfBirth = '1980-05-27' }
    2. Promise.prototype.allSettled method - runs all promises regardless of rejection of any promises
    3. String.prototype.matchAll method
    4. Optional Chaining operator - myobject?.possibleExistingProperty
    5. Dynamic Imports - Lazy loading imports for better performance
    1. BigInt datatype - 9007199254740992n


    ES12 (ES2021)
    1. Numeric separators - (_) 100_000_000_000
    2. Promise.prototype.any - returns first fulfilled promise
    3. Private class methods - class Person { #age() {return 10} }
    4. Logical assignment operators - ??=, &&=, ||=
    5. String.prototype.replaceAll method - 'hotdog dog'.replaceAll('dog', 'cat');


    ES13 (ES2022)
    1. Top level await
    2. Class field declarations - class User { name = "Tom" }
    3. Class Static Block - class Words { static { const words = []; } }
    4. Array.prototype.at method - [1,2,3].at(1)
    5. Array.prototype.findLast and findLastIndex methods - array1.findLast((element) => element > 45);

 */

/* Question 59: Currying in JS
    Currying is a technique in functional programming where a function is transformed into a sequence of functions,
    each taking a single argument. The curried function returns a new function for each argument until it receives
    all the necessary arguments and finally produces the result.

    Example -
    function curryAdd(x) {
      return function(y) {
        return function(z) {
          return x + y + z;
        };
      };
    }

    const curriedAdd = curryAdd(1)(2)(3);
    console.log(curriedAdd);

    Currying is a technique in functional programming where a function with multiple arguments is transformed into a
    sequence of nested functions, each taking a single argument.

*/

/* Question 60: Throttling and debouncing
    Throttling and debouncing are techniques used in web development to control the frequency of execution of a
    function in response to events like scrolling, resizing, typing, etc. These techniques are particularly useful to
    optimize performance and prevent the excessive execution of resource-intensive operations.

    1. Throttling:
    Throttling ensures that a function (like handling a scroll event on a webpage) is called only at certain intervals,
    preventing it from being called too frequently.
    Throttling is like limiting the rate at which a function can be called, making sure it doesn't happen too often.

    2. Debouncing
    Debouncing ensures that a function (like handling a keypress event while typing) is only called after a certain
    amount of time has passed since the last invocation. If the function is called frequently, it delays its execution
    until there's a pause.
    Debouncing is like waiting for a pause before allowing a function to execute, making sure it doesn't happen too
    frequently.

 */

/* Question 61: Generator Function
    A Generator is a special type of function in JavaScript that can be paused and resumed during execution.
    Generators are defined using the function* syntax and use the yield keyword to pause their execution. When a
    generator is called, it returns a generator object, which can be used to control the generator's execution using
    the next() method.

    For example:
    function* idGenerator() {
      let id = 1;
      while (true) {
        yield id++;
      }
    }

    const gen = idGenerator();
    console.log(gen.next().value); // Output: 1
    console.log(gen.next().value); // Output: 2
    console.log(gen.next().value); // Output: 3

 */

/* Question 62: Javascript Modules
    JavaScript Modules are a way to organize and encapsulate code into reusable pieces. They allow developers to create,
    export, and import code between different files and namespaces. Modules help to keep the global scope clean,
    promote code reuse and separation of concerns, and make it easier to manage large codebases.

    In JavaScript, there are two module systems:

    - CommonJS (used in Node.js): Uses require() to import modules and module.exports or exports to export modules.
    - ES6 Modules (used in modern browsers): Uses the import keyword to import modules and the export keyword to export
    modules.

 */