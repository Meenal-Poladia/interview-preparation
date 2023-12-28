
/* Question 1: What is Redux
    The main idea of redux is exactly the same as for the context API, setting up of the
    state in the app level. Redux is a library that is use for state management in JS applications. In react it solves
    the issue of prop drilling.
    Redux is responsible for only storing the data on its own and giving us methods to update the data.

    In Redux, the Store is a single piece of truth and you can think of it as a global
    state in your react that in fact, terms, store and state are used interchangeably
    when covering redux.

 */

/* Question 2: What is Store
     A store is a single source of truth and a way for us to manage the state of our application.

 */

/* Question 3: What is a Reducer function
    Reducer function is used to update the store. It takes 2 arguments: state & action.
    State is the initial value or the state before update. Action is what happened in the
    application or what kind of update we want to make in the store.

    Reducer has two functionality either return the updated state if any changes need to
    be taken place or return the old state.

 */

/* Question 4: Main Components of Redux
    Action - Actions are plain JavaScript objects that describe the intention to change the state.
    The actions can be dispatched from components, middleware, or any other part of the application.

    Reducer- Reducers are pure functions that take the current state and the action as arguments.
    They determine how the state should be updated based on the action type.

    Store - The store is the centralized container for the application state. It holds the complete
    state tree and provides methods to access the state, dispatch actions, and subscribe to state changes.

    useDispatch - The dispatch function is used to dispatch actions to update the Redux state.

    useSelector- It provides a way to access specific parts of the state stored in Redux.

 */

/* Question 5: Redux Workflow
    Action: An action is triggered in the application. It is an object describing what happened.

    Dispatch: The action is dispatched to the Redux store.

    Reducers: Reducers determine how the state should change based on the action.

    Store Update: The store is updated with the new state.

    Subscription: Subscribed components are notified of the state change and can re-render.

    This workflow provides a clear and predictable way to manage state in a React application, making it easier to trace
    the flow of data and understand how changes in the application state occur.
 */