### What is redux?

    Redux is a state management library for javascript applications like  react, angular, vue, venilla etc...

---

### What are the other State Management Solutions?

* Flux 
* Redux
* Mobx

---

### How redux works? Redux architecture?

  * In redux, instead of scatering the application state in various parts of UI applcation state, we store all the applcation state in central repository which is single javascript object called **Store**. (kind of database to the front-end). In other words.. Redux centralizes application's state.
  * Redux store solves the problem of synchronizing the data across different parts of the UI.
  * Redux also simplifies to understand how the data changes in our application. It makes the data flow transparent and predictable.

---

### What are the Pros and Cons of redux ?

Pros:

    * Predictable state changes.
    * Time travel debugging simplifies the root cause analysis.
    * Store the entire state in single file and reload the appliation later.(logrocket is the tool that helps in reproducing the production issues easily, without asking specific steps that user followed)
    * Redux allow to cache or preserve page state.

Cons:

    * Complexity - redux is based on functional programming principles
    * Too wordy (verbose)

---

### Where redux not fits? Is redux is the solution for all?

Not fits:

  * Tight budget (due to complexity of the implementation, takes more development time)
  * Small to medium-size apps
  * Simple UI and Data flows.
  * Data doesnt change much. Pulls the data in every page and renders in UI.

---

### How to setup redux development environment?



---

### What is webpack?

* Webpack is a module bundler for javascript, so we can write our javascript code into multiple files and have webpack combines in to a bundle.

---

### What are the Functional programming concepts?

**Programming Paradigms**:
* Functional (1950's)
* Object-oriented
* Procedural
* Event-driven

Functional programming is one among the programming paradigms.
* Highier order function
* Composition
* Currying
* Immutablity

---

### Benefits of functional programming?

* more concise
* easier to debug
* easier to test
* more scalable (multiple calls in parallel and better utilization of CPU cores.)

---

### What are Higher order functions?

---

### Redux core concepts

* store - holds the state of your application
* action - describes the changes in the state of the application
* reducer - which actually carries out the state transition depends on the action.

---

### Three Priciples of redux?
<br />

**Principle - 1**

    The state of your whole application is stored in the object tree with in a single store

* maintain our application state in a single object which would be managed by the redux store.

**Principle - 2**

    The only way to change the state is to emit an action, an object describing what happened.

* State is read-only
* To update the state of your application, you need to let Redux know about that with an action.
* We are not allowed to change the state object directly.
* Note: type is the manadatory field in the object others are optional. eg. 
  
  `{
      type: '<action_name>'      
  }`

**Principle - 3**

    To specify how the state object is transformed by actions, you write pure reducers.

* Pure reducers are pure functions which takes the '**previous state**' and '**action**' and returns '**new state**'.


   `reducer - (previousState, action) => newState`

<br />
<img src="https://raw.githubusercontent.com/yoganandaraol/react-tutorial/main/003-redux-intro/images/Redux-Core-Concepts.JPG" >

---

### What are actions?

* Actions are the only way to interact the applications with store.
* Transfers the information from your application to the redux store.
* These are plain js objects
* Actions has a **type** property (a string constant), which indicates what action to be performed.
* Other than type property, we can add any number of properties to the action object.
* **ActionCreator** is a **function that returns an action object**.

---

### What is a reducer?

* Reducer describes, how the state of an application to be changed for a specific action sent to redux store.
* Reducer is a function that accepts the previous state and action as parameters, and returns the new modified state (not mutated - new state object).

    `reducer - (previousState, action) => newState`

---

### What is a Redux store?

Redux store is centralized store that maintains state of entire application.

Responsibilities:
* Holds application state
* State can be access via **getState()**
* State can be updated via **dispatch(action)** 
* Store registers the listeners via **subscribe(listener)** method which **returns unsubscribe** function.

---

### What is middleware?

* Redux middleware is the recommended way to extend Redux with custom functionality.
* The key feature of middleware is that it is **composable**. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.
* Middleware provides extension point between dispatching an action, and the moment it reaches reducer.
* Middleware is used in following scenarios:
  * Async calls
  * logging
  * crash reporting
  * etc..
  
Code to add middleware to redux:

    const reduxLogger = require('redux-logger')
    const applyMiddleware = redux.applyMiddleware;
    
    const logger = reduxLogger.createLogger();
    const store = createStore(reducer, applyMiddleware(logger));

---

### Redux middleware and Async actions.

Redux store only knows 
* synchronously dispatch actions
* update the state by calling the root reducer function
* Notify the UI that something has changed.

Redux reducers must never contain "side effects". A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. Some common kinds of side effects are things like:

1. Logging a value to the console
2. Saving a file
3. Setting an async timer
4. Making an AJAX HTTP request
5. Modifying some state that exists outside of a function, or mutating arguments to a function
6. Generating random numbers or unique random IDs (such as Math.random() or Date.now())


However, any real app will need to do these kinds of things somewhere.

    " Redux middleware were designed to enable writing logic that has side effects. "


* Asynchronous Actions
  * Async API calls to fetch data from an endpoint and use that data in your application.


<hr />

### What are selectors?

A `selector` is simply a function that accepts Redux state as an argument and returns data that is derived from the state.

A `selector` is a hook the react-redux library provides which acts as a close equivalent to `mapStateToProps`

<hr />

### Why should you use a selector?

It is a best practice to keep your Redux store state minimal and derive data from the state as needed. Selectors help with that. They can compute derived data, allowing Redux to store the minimal possible state. Selectors are also very efficient. A selector is not recomputed unless one of its arguments changes.

<hr />

### What is container in redux?

<hr />


### What is `connect` in react-redux? 

<hr />


### Few alternatives in several react-redux features?
* We can replace **redux** with **react context api**
* We can also replace `react-redux connect` with `hooks` to **dispatch actions**
  

<hr />

### `Redux` vs `Context API`: Conclusions

Context API: 

    Resourceful and ideal for small applications where state changes are minimal.

Redux: 

    Perfect for larger applications where there are high-frequency state updates.

<hr />






### Building blocks of redux?
### Debugging redux code? & tools?
### Redux Store?
### Redux middleware?
### Calling APIs? Loadig indicators and caching?
### Unit test redux code?
### Integrating redux with react code?





---
