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

/* Question 10: Controlled and Uncontrolled Components
    Controlled Components: In a controlled component, the value of the input is managed by the React state. When a user
    interacts with the form, the React state is updated, and the updated value is reflected in the form. This approach
    allows the React component to have full control over the form inputs and ensures that the user's input is validated
    before it is sent to the server. The value of a controlled component is set by the state, and the onChange event
    handler is used to update the state whenever the input changes.

    Uncontrolled Components: In an uncontrolled component, the value of the input is managed by the DOM, not the React
    state. The React component does not have direct control over the input value, and instead relies on the DOM to
    keep track of the value. This approach can be faster and less verbose, but it does not provide the same level of
    control and validation that controlled components do. The value of an uncontrolled component is set using the
    defaultValue or value attribute on the input element, and the onChange event handler can be used to update the
    value as needed.

    In general, it's recommended to use controlled components for forms in React, as they provide more control over
    the user's input and ensure that the data is validated before it is sent to the server. However, uncontrolled
    components can be useful in certain situations, such as when you need to handle large amounts of data quickly,
    or when the form's initial value is unlikely to change.

    We use onChange handler to govern the changes made to the input element in controlled component whereas in
    uncontrolled components we use ref.

 */

/* Question 11: Props in React
    The props in React are the inputs to a component of React.
    They can be single-valued or objects having a set of values that will be passed to components of React.
    We can say that props are the data passed from a parent component into a child component.

 */

/* Question 12: Difference between React state and props
     Props	                                                    State
    Immutable	                                                Owned by its component
    Has better performance	                                    Locally scoped
    Can be passed to child components	                        Writeable/Mutable
                                                                has setState() method to modify properties
                                                                Changes to state can be asynchronous
                                                                can only be passed as props

 */

/* Question 13: What are hooks?
    Hooks were introduced in React 16.8 to simplify and enhance the development of functional components.
    React hooks are functions that enable functional components to have state, lifecycle methods, context, and other
    React features that were previously exclusive to class components.

 */

/* Question 14: Strict Mode in React.
    In React, the strict mode is a development mode feature that helps developers write better code by highlighting
    potential problems and warning about unsafe coding practices. When enabled, strict mode introduces additional
    checks and warnings in the developer console that might be missed in normal development mode.

    Here are some of the benefits of using strict mode in React:

    1. Highlighting potential problems: Strict mode will warn you about certain coding practices that might be
    problematic, such as accessing deprecated APIs, using unsafe lifecycle methods, and performing state updates in
    the wrong order. This can help you catch issues early and avoid bugs in production.

    2. Enabling stricter error handling: In strict mode, React will throw additional warnings and errors for common
    mistakes like missing key props, invalid elements, or function components returning multiple elements. This can
    help you find and fix errors faster and avoid unexpected behavior.

    3. Helping you find performance issues: Strict mode can also help you identify potential performance issues in
    your code, such as excessive renders, unnecessary component updates, or slow re-renders. This can help you optimize
    your code and make your application faster and more responsive.

    To enable strict mode in your React application, you can wrap your app component with the React.StrictMode component

 */

/* Question 15: Name a few techniques to optimize React app performance?
        1. React.memo
        Memoisation is an optimization technique used primarily to speed up computer programs by storing the results of
        expensive function calls and returning the cached result when the same inputs occur again.

        Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one
        of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
        If no array is provided, a new value will be computed on every render.

        example -
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

        2. useCallback
        useCallback is a hook that allows us to basically store a function across component executions.
        So it allows us to tell React that we wanna save a function and that this function should not be recreated
        with every execution.
        useCallback saves a function of our choice basically somewhere in React's internal storage
        and we'll always reuse that same function object then when this component function executes.

        useCallback then returns that stored function and when the app function reruns useCallback will look for
        that stored function which React stored for us and reuse that same function object.

        useCallback also accepts dependency array.

        3. Using React.PureComponent
        React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t
        implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state
        comparison.

        If your React component’s render() function renders the same result given the same props and state,
        you can use React.PureComponent for a performance boost in some cases.

        In simple words, If the previous value of state or props and the new value of state or props is the same, the
        component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of
        re-rendering of the component.

        4. React.lazy()
        lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading
        components that aren’t used during the initial render.

 */

/* Question 16: Different types of hook
    1. useState:
    It is the most commonly used React Hook. It allows functional components to have state variables. It takes an
    initial state value as the argument and returns an array with two elements — the current state value and a function
    to update that state.

    2. useEffect:
    ‘useEffect’: It enables performing side effects, such as data fetching, subscriptions, or DOM manipulations after
    the component has been rendered.

    3. useReducer
    Provides an alternative to ‘useState’ for managing complex state logic involving multiple sub-values or when the
    next state depends on the previous one.

    4. useLayoutEffect
    useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

    5. useContext
    useContext is a React Hook that lets you read and subscribe to context from your component.

    6. useCallback and useMemo
    - useCallback is used to memoize functions, preventing unnecessary re-renders.
    - useMemo is used to memoize values, preventing unnecessary re-computations.

    7. useRef
    useRef is a React Hook that lets you reference a value that’s not needed for rendering. useRef can help us to
    manipulate an element which is referenced.

 */

/* Question 17: Types of Side Effect
    There are two types of side effects in React component. They are:
        1. Effects without Cleanup: This side effect will be used in useEffect which does not restrict the browser
        from screen update. It also improves the responsiveness of an application.
        A few common examples are network requests, Logging, manual DOM mutations, etc.

        2. Effects with Cleanup: The useEffect hook in React allows you to specify a cleanup function that will be
        executed before the effect is re-run or when the component is unmounted. This cleanup function can be used to
        clean up any resources or subscriptions created by the effect.
        The cleanup function is returned by the effect callback function.

        Example: Let’s look at this scenario: imagine we get a fetch of a particular user through a user’s id, and,
        before the fetch completes, we change our mind and try to get another user. At this point, the prop, or in
        this case, the id, updates while the previous fetch request is still in progress.
        It is then necessary for us to abort the fetch using the cleanup function so we don’t expose our application
        to a memory leak.

 */

/* Question 18: Prop drilling
    Prop drilling means passing props from the grandparent to parents to child. Each component in the hierarchy receives
    the props where or not in use to that it reaches to their children.

      The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have
    access to the data.

 */

/* Question 19: Error Boundary and places to detect it
    Introduced in version 16 of React, Error boundaries provide a way for us to catch errors that occur in the render
    phase. It is class based as render method is not in functional components.

    Any component which uses one of the following lifecycle methods is considered an error boundary.
    In what places can an error boundary detect an error?
        1. Render phase
        2. Inside a lifecycle method
        3. Inside the constructor

 */

/* Question 20: Custom Hooks
    A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks.
    It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for
    component hierarchy restructuring.

    The disadvantage of Custom Hooks is it cannot be used inside of the classes.

 */

/* Question 21: Different ways to style react
    1. Inline Styling: We can directly style an element using inline style attributes.

    2. Using JavaScript object: We can create a separate JavaScript object and set the desired style properties.
    This object can be used as the value of the inline style attribute.

    3. CSS Stylesheet: We can create a separate CSS file and write all the styles for the component inside that
    file. This file needs to be imported inside the component file.

    4. CSS Modules: We can create a separate CSS module and import this module inside our component.
    Create a file with “.module.css”‘ extension, styles.module.css.

 */

/* Question 22: Data passing in between components
    1. Parent Component to Child Component (using props)
        With the help of props, we can send data from a parent to a child component.
   2. Child Component to Parent Component (using callbacks)
        This one is a bit tricky. We follow the steps below:
            1. Create a callback in the parent component which takes in the data needed as a parameter.
            2. Pass this callback as a prop to the child component.
            3. Send data from the child component using the callback.

 */

/* Question 23: Higher Order Component
    Higher Order Components (HOCs) are a pattern in React that involves creating a function that takes a component and
    returns a new component with additional props, functionality, or behavior. HOCs allow you to reuse component logic,
    share code between components, and apply cross-cutting concerns.

 */

//Difference in react and other frameworks
