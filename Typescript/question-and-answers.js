
/* Question 1: What is Typescript
    Typescript is a programming language developed by Microsoft to address some of the short comings of Javascript.
    Typescript is build on top of Javascript so every Javascript file is a valid.
    Typescript file. TypeScript is an open-source superset of JavaScript that adds additional features without breaking
    existing programs. It promotes static typing.

 */

/* Question 2: Features of Typescript
    1. Static typing: Static typing makes TypeScript easier to read and more structured than JavaScript’s dynamic
    typing.
    2. Cross-Platform: The TypeScript compiler can be installed on any operating system such as Windows, macOS, and
    Linux.
    3. Optional Static Typing: TypeScript also allows optional static typing in case you are used to the dynamic typing
    of JavaScript.
    4. ES6 features: TypeScript includes most features of planned ECMAScript 2015 (ES6) such as Arrow functions.
    5. Easy Debugging: Easy debugging due to advanced debugger that focuses on catching logical errors before
    compile-time

 */

/* Question 3: Built-in data types
    1. Number type
    2. String type
    3. Boolean type
    4. Undefined type
    5. Null type
    6. Void / Any

 */

/* Question 4: Type inference
    Typescript uses a very powerful tool called as type inference wherein it tries to infer the type of a particular
    variable based on its variable assignment.

    Example:
    Specifying the type explicitly
    let course: string = "React - The complete guide";
    course = 12345;

    Typescript infers the type implicitly
    let study = "React - The complete guide";
    study = 12345;                      // Throws error as it is declared above that study is a string

 */

/* Question 5: Union Type
    When we want to assign more than one type to a variable we call that feature as union types.
    We can have as many types as we want.

    We can use it for type inference as well as while declaring a variable.

    example -
    const course: string | number | boolean = "React - the Javascript library"

    example -
    let laber: string;
    laber = "String"

 */