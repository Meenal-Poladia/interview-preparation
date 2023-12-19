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