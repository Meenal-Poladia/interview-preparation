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

    8. useImperativeHandle
    It will enable modifying the instance that will be passed with the ref object.

    9. useDebugValue
    It is used for displaying a label for custom hooks in React DevTools.

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

/* Question 24: Different Phases of the component lifecycle
     There are four different phases in the lifecycle of React component. They are:
        1. Initialization: During this phase, React component will prepare by setting up the default props and
        initial state for the upcoming tough journey.
        2. Mounting: Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM,
        the entire browser DOM which has been currently rendered would not be refreshed. This phase includes the
        lifecycle methods componentWillMount and componentDidMount.
        3. Updating: In this phase, a component will be updated when there is a change in the state or props of a
        component. This phase will have lifecycle methods like componentWillUpdate, shouldComponentUpdate, render,
        and componentDidUpdate.
        4. Unmounting: In this last phase of the component lifecycle, the component will be removed from the DOM
        or will be unmounted from the browser DOM. This phase will have the lifecycle method named
        componentWillUnmount
 */

/* Question 25: Lifecycle methods of React
     The various lifecycle methods are:
        1. constructor(): This method will be called when the component is initiated before anything has been done.
        It helps to set up the initial state and initial values.

        2. getDerivedStateFromProps(): This method will be called just before element(s) rendering in the DOM.
        It helps to set up the state object depending on the initial props. The getDerivedStateFromProps() method
        will have a state as an argument and it returns an object that made changes to the state. This will be the
        first method to be called on an updating of a component.

        3. render(): This method will output or re-render the HTML to the DOM with new changes. The render() method
        is an essential method and will be called always while the remaining methods are optional and will be called
        only if they are defined.

        4. componentDidMount(): This method will be called after the rendering of the component. Using this method,
        you can run statements that need the component to be already kept in the DOM.

        5. shouldComponentUpdate(): The Boolean value will be returned by this method which will specify whether
        React should proceed further with the rendering or not. The default value for this method will be True.

        6. getSnapshotBeforeUpdate(): This method will provide access for the props as well as for the state before
        the update. It is possible to check the previously present value before the update, even after the update.

        7. componentDidUpdate(): This method will be called after the component has been updated in the DOM.

        8. componentWillUnmount(): This method will be called when the component removal from the DOM is about to
        happen.

 */

/* Question 26: Differentiate React Hooks vs Classes.
    React Hooks
        1. It is used in functional components of React.
        2. It will not require a declaration of any kind of constructor.
        3. It does not require the use of this keyword in state declaration or modification.
        4. It is easier to use because of the useState functionality.
        5. React Hooks can be helpful in implementing Redux and context API.

    Classes
        1. It is used in class-based components of React.
        2. It is necessary to declare the constructor inside the class component.
        3. Keyword this will be used in state declaration (this.state) and in modification (this.setState()).
        4. No specific function is available for helping us to access the state and its corresponding setState variable.
        5. Because of the long setup of state declarations, class states are generally not preferred.


 */

/* Question 27: How does the performance of using Hooks will differ in comparison with the classes?
    React Hooks will avoid a lot of overheads such as the instance creation, binding of events, etc., that are
    present with classes.
    Hooks in React will result in smaller component trees since they will be avoiding the nesting that exists in
    HOCs (Higher Order Components) and will render props which result in less amount of work to be done by React

 */

/* Question 28: React Router
    React Router refers to the standard library used for routing in React. It permits us for building a single-page
    web application in React with navigation without even refreshing the page when the user navigates.

    The major components of React Router are given below:
        1. BrowserRouter: It is a router implementation that will make use of the HTML5 history API (pushState,
        popstate, and event replaceState) for keeping your UI to be in sync with the URL. It is the parent component
        useful in storing all other components.

        2. Routes: It is a newer component that has been introduced in the React v6 and an upgrade of the component.

        3. Route: It is considered to be a conditionally shown component and some UI will be rendered by this
        whenever there is a match between its path and the current URL.

        4. Link: It is useful in creating links to various routes and implementing navigation all over the
        application. It works similarly to the anchor tag in HTML


 */

/* Question 29: Conditional rendering in React
    There are different approaches for implementing conditional rendering in React. Some of them are:
        1. Using if-else conditional logic which is suitable for smaller as well as for medium-sized applications
        2. Using ternary operators, which takes away some amount of complication from if-else statements
        3. Using element variables, which will enable us to write cleaner code

 */

/* Question 30: Pass data between sibling components using React router
    Passing data between sibling components of React is possible using React Router with the help of history.push and
    match.params.

    In the code given below, we have a Parent component AppDemo.js and have two Child Components HomePage and AboutPage.
    Everything is kept inside a Router by using React-router Route. It is also having a route for /about/{params} where
    we will pass the data.
    The HomePage is a functional component with a button. On button click, we are using
    props.history.push(‘/about/’ + data) to programmatically navigate into /about/data.
    Also, the functional component AboutPage will obtain the data passed by props.match.params.aboutId.

 */

/* Question 31: Synthetic events
    SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's
    native event, including stopPropagation() and preventDefault(), except the events work identically across all
    browsers.

 */

/* Question 32: Difference between Shadow DOM and Virtual DOM?
    The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.
    The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

 */

/* Question 33: React Fiber
    Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16.
    The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause,
    abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

 */

/* Question 34: Forwarding Ref
    Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
    This is typically not necessary for most components in the application.
    However, it can be useful for some kinds of components, especially in reusable component libraries.
    The most common scenarios are described below.
    example
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    ));

    // You can now get a ref directly to the DOM button:
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

 */

/* Question 35: Proptypes in React
    Proptypes helps to declare the types of the props accepted by your component. These types will be checked during
    rendering and in development only.

    example:
    import React from 'react';
    import PropTypes from 'prop-types';

    const MyComponent = ({ name, age, isStudent, callback }) => {
      return (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
          <button onClick={callback}>Click me</button>
        </div>
      );
    };

    MyComponent.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      isStudent: PropTypes.bool,
      callback: PropTypes.func.isRequired,
    };

    export default MyComponent;

 */

/* Question 36: React has uni-dimensional flow
     React follows a unidirectional data flow. This means that when designing a React app, we often nest child
     components within parent components. And since the data flows in a single direction, it becomes easier to debug
     errors and know where the problem occurs in an application at the moment.

 */

/* Question 37: Why is React better than other frameworks
    1. Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it
    provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get
    complex very quickly.

    2. Improved performance: React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares
    its previous state and updates only those components in the real DOM, whose states have changed, rather than
    updating all the components — like conventional web applications.

    3. Reusable components: Components are the building blocks of any React application, and a single app usually
    consists of multiple components. These components have their own logic and controls, and they can be reused through
    the application, which, in turn, dramatically reduces the development time of an application.

    4. Dedicated tools for easy debugging: Facebook has released a chrome extension that we can use to debug React
    applications. This makes the process of debugging React to web applications faster and easier.

    5. Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app,
    we often nest child components within parent components. And since the data flows in a single direction, it becomes
    easier to debug errors and know where the problem occurs in an application at the moment.

 */
