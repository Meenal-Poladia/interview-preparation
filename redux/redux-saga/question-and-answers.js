
/* Question 1: What is Redux Saga?
        Redux Saga is a middleware library for Redux that helps manage side effects, such as asynchronous data fetching,
        in a Redux application.
        It uses ES6 Generators to write asynchronous code in a synchronous style, making it easier to manage complex
        asynchronous logic.

 */

/* Question 2: What are the key features of Redux Saga?
     Some key features of Redux Saga include:
        1. Ability to handle complex asynchronous flows, such as data fetching, API calls, and handling WebSocket
        connections.
        2. Declarative approach using ES6 Generators to write asynchronous code in a synchronous style.
        3. Ability to coordinate and sequence multiple asynchronous actions.
        4. Built-in support for cancellation and error handling.
 */

/* Question 3: What are the main concepts in Redux Saga
    Effects: Represent asynchronous operations, such as API calls or dispatching actions, and are created using plain
    JavaScript objects.
    Generators: Functions that can pause and resume their execution, allowing for the creation of complex asynchronous
    flows.
    Sagas: Generator functions that manage the flow of asynchronous actions in the application, typically listening for
    specific actions and triggering effects in response.

 */

/* Question 4: How do you create a Saga in Redux Saga
    Sagas are created using generator functions. Here's an example of how to create a simple Saga:

    import { put, takeEvery } from 'redux-saga/effects';

    function* mySaga() {
      yield takeEvery('FETCH_DATA', fetchData);
    }

    function* fetchData(action) {
      // Perform asynchronous operation, such as fetching data from an API
      const data = yield fetch(action.url).then(response => response.json());
      // Dispatch an action with the fetched data
      yield put({ type: 'FETCH_DATA_SUCCESS', data });
    }

 */

/* Question 5: What is the purpose of takeEvery in Redux Saga
    takeEvery is a helper function provided by Redux Saga that listens for every action of a certain type and runs a
    Saga function in response. It allows you to handle multiple instances of the same action concurrently.

 */

/* Question 6: How do you handle errors in Redux Saga
     Redux Saga provides built-in error handling mechanisms. You can use try/catch blocks inside your Sagas to catch
     errors and handle them appropriately. Additionally, you can use the takeEvery or takeLatest helpers with a
     specific error action type to handle errors globally.

 */

/* Question 7: What is the difference between takeEvery and takeLatest in Redux Saga
    takeEvery runs a Saga every time an action of a specific type is dispatched, allowing multiple instances of the
    Saga to run concurrently. takeLatest, on the other hand, only runs the latest instance of the Saga and cancels any
    previous instances that are still running. This is useful for scenarios where you only want to handle the latest
    action and ignore previous ones.

 */

/* Question 8: How do you test Redux Sagas
    Redux Sagas can be tested using libraries such as redux-saga-test-plan or redux-saga-tester. You can create mock
    functions and mock the Redux store to test the behavior of Sagas in different scenarios, such as success, failure, or cancellation of asynchronous operations.

 */