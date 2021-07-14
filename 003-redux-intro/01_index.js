// import redux from 'redux'; // ES6 style of importing
const redux = require('redux');
const createStore = redux.createStore;

const ADD_TASK = "ADD_TASK";

function addTask(){
    return {
        type: ADD_TASK,
        payload: 'First redux action'
    };
}


// reducer -> (previousState, action) => newUpdatedState

const initialState = {
    numberOfTasks: 0
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TASK: return{
            ... state,
            numberOfTasks: state.numberOfTasks + 1
        }
        default: return state
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(addTask());
store.dispatch(addTask());
store.dispatch(addTask());
unsubscribe();

