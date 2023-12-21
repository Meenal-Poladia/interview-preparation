/*
    Jordan Walke, a software engineer who was working for Facebook created React.
    It was first deployed on the news feed of Facebook in 2011 and on Instagram in 2012.
    Developers from the Javascript background can easily develop web applications with the help of React.
    React hooks were introduced in 2018.
 */

/* Question 1: What is react?
    ReactJS is a open source, frontend, javascript library used for building user interfaces based on components.
    It is used to create Single Page Applications.

    Some of the features of reactjs are:
        1. Component based architecture
        2. Virtual DOM
        3. Declarative Syntax
        4. JSX
        5. React Hooks
*/

/* Question 2: Advantages of react
    1. Use of Virtual DOM to improve efficiency
    2. Reusable components
    3. Gentle learning curve - someone knowing javascript can learn it
    4. SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in
    various search engines. It also allows server-side rendering, which boosts the SEO of an app.

 */

/* Question 3: Limitations of React:
    1. React is not a full-blown framework as it is only a library.
    2. The components of React are numerous and will take time to fully grasp the benefits of all.
    3. It might be difficult for beginner programmers to understand React.
    4. Coding might become complex as it will make use of inline templating and JSX.
    5 Requires additional tools: ReactJS requires additional tools like Webpack, Babel, and others to create a
    complete development environment. While these tools are powerful, they can be complex to set up and use.
    6. Limited functionality: ReactJS is primarily a user interface library and does not provide many of the
    features you would expect from a full-stack framework, such as routing and state management.

 */

/* Question 4: What are keys in react
    Keys are special attribute that help to identify each item in a list uniquely.

     Importance of keys -
        1. Keys help react identify which elements were added, changed or removed.
        2. Keys should be given to array elements for providing a unique identity for each element.
 */

/* Question 5: React Fragment
    Fragments helps us to return multiple elements from the components render method without wrapping them in a
    parent div element
*/

/* Question 6: JSX
    JSX stands for Javascript XML. It allows us to write HTML code inside javascript andplace them in the DOM without
    using functions like appendchild() or createElement().

    JSX provides syntactic sugar for React.createElement( ) function.

    example -
    const text = React.createElement('p', {}, 'This is a text');
    const container = React.createElement('div','{}',text );
    ReactDOM.render(container,rootElement);

 */

/* Question 7: What are Functional and Class-based components
    Functional components and class components are two ways to define React components.
    Function Components: Function components are simply JavaScript functions that receive props as input and return
    React elements. They are also known as stateless components. They are defined using the "function" keyword
    followed by the component name and the props argument. Function components do not have access to lifecycle
    methods or the state.

    Class Components: Class components are created using the "class" keyword, and they extend the React.Component
    class. They have a state, lifecycle methods, and can be used when you need to manage state or make use of lifecycle
    methods within your component. Class components are also known as stateful components.

 */

/* Question 8: Difference between Functional and Class-based components
    1. Function components are simple, lightweight and fast, while class components are more complex and slow.
    2. Function components do not have access to lifecycle methods or state, while class components do.
    3. Function components are easier to read and understand, while class components can get complex quickly, especially
    if you are using lifecycle methods and state.

 */

/* Question 9: What is the virtual DOM? How does react use the virtual DOM to render the UI?
    Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced
    with the real DOM by a library such as ReactDOM.

    Whenever there is a change in any component the entire code is not rendered again but only the component changed
    and its children are rendered which makes react optimised than other framework.

 */