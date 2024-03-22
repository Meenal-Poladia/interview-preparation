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

        Overall, React's component-based architecture, virtual DOM rendering, efficient state management, and routing
        capabilities make it well-suited for building SPAs where responsiveness, performance, and maintainability are
        key considerations.
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
    parent div element.

    A React Fragment is a built-in component in React that allows you to group multiple children elements without
    adding extra nodes to the DOM. It essentially acts as a wrapper that doesn't create an additional DOM element.

    Advantages of using React Fragments include:

    1. Reduced DOM Nodes: Fragments help in keeping the DOM tree lean by not adding unnecessary wrapper elements. This
    can lead to better performance and improved rendering times, especially in large applications with complex component
    hierarchies.

    2. Cleaner JSX: Fragments allow you to structure your JSX code in a more concise and readable manner, as you can
    group multiple elements without introducing unnecessary parent elements.

    3. Avoid Unnecessary Wrappers: Fragments are particularly useful when working with components that expect a single
    child element. Instead of introducing unnecessary wrapper elements, Fragments allow you to return multiple elements
    without any additional nesting.

*/

/* Question 6: JSX
    JSX stands for Javascript XML. It allows us to write HTML code inside javascript and place them in the DOM without
    using functions like appendchild() or createElement().

    JSX provides syntactic sugar for React.createElement( ) function.

    example -
    const text = React.createElement('p', {}, 'This is a text');
    const container = React.createElement('div','{}',text );
    ReactDOM.render(container,rootElement);

 */

/* Question 7 & 39: What are Functional and Class-based components
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

    Benefits: High Performance, reduces unnecessary re-renders.

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

        useMemo is used to memoize values. It only recomputes the memoized value when one of the dependencies has
        changed.
        It is useful for expensive computations or calculations that are needed in the rendering process.
        Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        Example:
        import React, { useMemo } from 'react';

        function MyComponent({ a, b }) {
          const result = useMemo(() => {
            // Expensive computation
            return a + b;
          }, [a, b]);

          return <div>{result}</div>;
        }

        2. useCallback
        useCallback is used to memoize functions. It returns a memoized version of the callback function that only
        changes if one of the dependencies has changed.

        It is useful when passing callbacks to child components to prevent unnecessary re-renders.

        Syntax: const memoizedCallback = useCallback(() => callback(), [dependencies]);
        Example:

        import React, { useCallback } from 'react';

        function MyComponent({ onClick }) {
          const handleClick = useCallback(() => {
            onClick('Hello, world!');
          }, [onClick]);

          return <button onClick={handleClick}>Click Me</button>;
        }

        The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and
        useCallback returns a memoized function.

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

        React.lazy() is a function provided by React that allows you to dynamically import components. It is typically
        used with React's code-splitting feature to improve the performance of your application by splitting it into
        smaller bundles that are loaded on-demand.

        You can use React.lazy() to import a component dynamically. This means that the component is not loaded until
        it is actually needed, which can reduce the initial bundle size and improve load times.

        React.lazy() accepts a function that should import the component using dynamic import syntax, typically using
        import().

        You then use the resulting component just like you would any other React component.

        Here's an example of how you might use React.lazy():
        import React, { Suspense } from 'react';

        const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

        function MyComponent() {
          return (
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <MyLazyComponent />
              </Suspense>
            </div>
          );
        }

    In this example:

    We use React.lazy() to dynamically import the MyLazyComponent.
    We wrap the MyLazyComponent with a Suspense component, providing a fallback component to display while the lazy
    component is loading.
    Using React.lazy() with code-splitting allows you to split your application into smaller bundles, improving initial
    load times and overall performance by only loading the code needed for the current view.

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
    The useLayoutEffect hook in React is similar to the useEffect hook, but it runs synchronously after all DOM
    mutations. It is typically used when you need to perform DOM measurements or operations that require synchronous
    updates, such as updating the layout based on DOM dimensions or positions.

    useLayoutEffect is invoked synchronously after all DOM mutations, but before the browser paints the updated screen.
    This makes it suitable for operations that require immediate access to the updated DOM.

    The syntax for useLayoutEffect is similar to useEffect, where you provide a callback function that performs the
    desired side effects. The difference is that useLayoutEffect runs synchronously instead of asynchronously like
    useEffect.

    Just like useEffect, you can also specify dependencies for useLayoutEffect, which will cause the effect to re-run
    whenever any of the dependencies change.

    Here's an example of how you might use useLayoutEffect:
    import React, { useLayoutEffect, useState } from 'react';

    function MyComponent() {
      const [width, setWidth] = useState(null);

      useLayoutEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };

        // Initial measurement
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array to run only once on mount

      return (
        <div>
          Window width: {width}
        </div>
      );
    }

    5. useContext
    The useContext hook in React provides a way to consume context values created by the React.createContext() function.
    Context allows you to pass data through the component tree without having to pass props down manually at every level.

    You first create a context using React.createContext(), which returns an object with Provider and Consumer
    components.

    You then wrap the parts of your component tree that need access to the context with the Provider component,
    passing the context value as a prop.

    Components that need access to the context can then use the useContext hook to consume the context value.

    import React, { createContext, useContext } from 'react';

    // Create a context
    const MyContext = createContext();

    // Create a provider component
    function MyProvider({ children }) {
      const value = 'Hello from Context';
      return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
    }

    // Component consuming the context
    function MyComponent() {
      const contextValue = useContext(MyContext);
      return <div>{contextValue}</div>;
    }

    // Usage in the app
    function App() {
      return (
        <MyProvider>
          <MyComponent />
        </MyProvider>
      );
    }

    6. useCallback and useMemo
    - useCallback is used to memoize functions, preventing unnecessary re-renders.
    - useMemo is used to memoize values, preventing unnecessary re-computations.

    7. useRef
    useRef is a hook which provides us with reference of the DOM Node and lets us mutate and maintain its value
    across re-renders.

    useRef is a React Hook that lets you reference a value that’s not needed for rendering. useRef can help us to
    manipulate an element which is referenced.

    The useRef hook in React provides a way to create mutable references that persist across renders. Unlike regular
    JavaScript references (created with let or const), useRef maintains the same reference across re-renders, making it
    useful for accessing and managing DOM elements, storing mutable values, or persisting values across renders without
    causing re-renders.

    8. useImperativeHandle
    It will enable modifying the instance that will be passed with the ref object.

    9. useDebugValue
    It is used for displaying a label for custom hooks in React DevTools.

 */

/* Question 17: Types of Side Effect
    There are two types of side effects in React component. They are:
        1. Effects without Cleanup: These effects don't require any cleanup, meaning they run when the component mounts
        and may perform actions such as fetching data from an API or subscribing to events.
        They are typically defined using the useEffect hook.

        2. Effects with Cleanup: These effects may require cleanup to avoid memory leaks or resource leaks when the
        component unmounts or when dependencies change. They are typically defined using the useEffect hook, and the
        cleanup function is returned from the effect callback.
        Example:
        useEffect(() => {
          console.log('Component mounted');
          // Subscribe to event
          window.addEventListener('resize', handleResize);

          // Cleanup function
          return () => {
            console.log('Component unmounted');
            // Unsubscribe from event
            window.removeEventListener('resize', handleResize);
          };
        }, []);

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
    In React, an Error Boundary is a component that catches JavaScript errors anywhere in its child component tree,
    logs those errors, and displays a fallback UI instead of crashing the entire application. It is used to gracefully
    handle errors that occur during rendering, in lifecycle methods, or in constructors of the components it wraps.

    Used in Class Based Components. Any component which uses one of the following lifecycle methods is considered an
    error boundary.
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

/* Question 38: How is React useful for creating Single Page Applications
    A Single Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates
    the content of that page as the user interacts with the application. Unlike traditional web applications, where
    navigating to different pages involves full page reloads, SPAs use JavaScript to fetch data from the server and
    update the content of the page without needing to reload the entire page.

    Key characteristics of SPAs include:

    1. Dynamic Updates: SPAs update the content of the page dynamically in response to user actions, such as clicking
    buttons or submitting forms, without requiring a full page reload.

    2. Client-Side Routing: SPAs often use client-side routing to handle navigation within the application. This allows
    for changes in the URL without triggering a server request, enabling a smoother user experience.

    3. Rich User Interactions: SPAs can provide rich and interactive user experiences, with features like animations,
    real-time updates, and seamless transitions between different views.

    4. Efficient Resource Usage: SPAs only load the necessary resources (HTML, CSS, JavaScript, and data) when needed,
    reducing server requests and improving performance.

    5. Back-End API: SPAs typically rely on a back-end API (Application Programming Interface) to interact with the
    server and fetch data asynchronously. This decoupling of the front-end and back-end allows for greater flexibility
    and scalability in development.

 */

/* Question 39: Why are functional components called as Stateless and class based components called Stateful
components in React

    Functional components in React are often referred to as stateless components because they don't have their own
    internal state. They are pure functions that take props as input and return JSX elements as output. Since they don't
    manage any state, their behavior is entirely determined by their input props, making them stateless.

    On the other hand, class-based components in React are often called stateful components because they have the
    ability to hold and manage their own internal state using the state property. These components can change their
    behavior and appearance over time by updating their state in response to user interactions, data fetching, or other
    events.

    The terms "stateless" and "stateful" highlight the distinction between components that solely rely on their input
    props for rendering (stateless) and components that manage their own internal state (stateful). This differentiation
    is important in understanding how components behave and interact within a React application. However, with the
    introduction of React Hooks, functional components can now also manage state using the useState hook, blurring the
    line between stateless and stateful components to some extent.

 */




/* Notes:
    1. We can forward props from parent component to child component using destructuring (...props)
    See: React Maxmilian course Section 4: 65: Working with multiple JSX slots

    2. It is possible to have multiple slots in just one component. The first slot will be children and the 2nd one can
    be a name of our choice.
    See: React Maxmilian course Section 4: 66: Working with multiple JSX slots

    3. We can pass a component or element as a props to a child component.
    See: React Maxmilian course Section 4: 67: Setting Component Types Dynamically

    4.

 */
