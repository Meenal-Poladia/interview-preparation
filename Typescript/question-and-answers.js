
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

/* Question 6: Modules
    Modules in TypeScript are a collection of related variables, functions, classes, and interfaces.
    You can think of modules as containers that contain everything needed to execute a task. Modules can be imported to
    easily share code between projects.

    example -
    module module_name{
        class xyz{
        export sum(x, y){
        return x+y;
        }
    }

 */

/* Question 7: How do you call a base class constructor from a child class in TypeScript
    We can use the super() function to call the constructor of the base class.

    class Animal {
      name: string;
      constructor(theName: string) {
        this.name = theName;
      }
      move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }

    class Snake extends Animal {
      constructor(name: string) {
        super(name);
      }
      move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
      }
    }

 */

/* Question 8: Type aliases
    To avoid duplication of code we can use type alias.
    using type alias we can define our own base type in which a more complex type definition is stored and then we can
    use that type alias instead of repeating the entire type definition.

    Alias can be created using the type keyword which is a reserved typescript word.

    example -
    type Person = {
        name: string;
        age: number;
    }

    let people = Person[];

    let person = Person

 */

/* Question 9: Understanding Genetics
    We can assign types to parameter of the functions.
    Typescript also infers the return value based on the types of value passed as parameter.

    example -
    function add(a: number, b: number) {
        return a + b
    }

    Here, it infers that the return value will also be a number, there is no other value which could be returned.
    However, we can also explicitly set the return value of the function. But avoid setting the type unless required.

    example -
    function add(a: number, b: number): number | string {
        return a + b
    }

    When a function does not return anything then there is a special return value known as void. Void can be used in
    conjunction with null or undefined and is used only in context with functions. The function returns void value.

 */

/* Question 10: Interfaces
    Interfaces are object type definition.
    We can add properties and methods in interface. While declaring a method we do not declare the actual code that goes
    into the method but instead just the type of method.

    The key part of interfaces. They don't just act as object types, instead, they also force us to set up a certain
    structure for our classes.

 */