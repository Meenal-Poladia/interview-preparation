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

/* Question 2: Types of operators in javascript?
    1. Arithmetic Operators
    2. Comparison (Relational) Operators
    3. Bitwise Operators
    4. Logical Operators
    5. Assignment Operators
    6. Special Operators

*/

/* Question 3: Datatypes in Javascript?
    1. Primitive data type - Bunns
        ■	String - represents sequence of characters e.g. "hello"
        ■	Number - represents numeric values e.g. 100
        ■	Boolean  - represents boolean value either false or true
        ■	Undefined - represents undefined value
        ■	Null - represents null i.e. no value at all
    2. Non-primitive (reference) data type
        ■	Object - represents instance through which we can access members
        ■	Array - represents group of similar values
        ■	RegExp - represents regular expression

*/

/* Question 4: Difference between undefined and null?
    Null and undefined are primitive data type values. They both are falsy values.

    Undefined means the default value of a variables that are declared but not assigned a value. Function parameters
    that are not provided with a value default to undefined. The typeOf undefined is undefined.

    Null is often explicitly assigned to variables or object properties to signify that they intentionally have no
    value. The typeOf undefined is object.

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
    In JS there are 5 falsy values 0, '', undefined, null, NaN and of course false itself. These values are not false
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

/* Question 17: Compilation, Interpretation and Just In Time compilation
    1. Compilation
    Compilation is the process of translating the entire source code of a program into machine code or an intermediate
    code (e.g., bytecode) all at once.
    The resulting compiled code is a standalone executable file.

    2. Interpretation
    Interpretation involves executing a program directly without a prior translation of the entire source code.
    An interpreter reads and executes the source code line by line or statement by statement.

    3. Just-In-Time (JIT) Compilation
    Entire code is converted into machine code at once, then executed immediately.

 */

/* Question 18: Execution Context
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


// Difference between for of and for in loop
// How do you check if a variable is an object?
// -> typeOf(value) === 'object' && value !== null && !Array.isArray(value)

//What is hoisting

//What is Temporal Dead Zone

// What is the difference between map and forEach loop

// Difference between slice and splice

// What is destructuring?

// Difference between spread and rest operator

// What is IIFE

//What is Higher Order Function

// What is callback hell

// Difference between Arrow function and Regular function

// Explain call(), apply() and bind()

// Promises in JS

// Async /Await

// Event loop

// Event bubbling

// What is currying in JS

// Difference between e.preventDefault() and e.stopPropagation()

// Throttling and debouncing

// Shallow copy and deep copy

//