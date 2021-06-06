// import redux from 'redux'; // ES6 style of importing
const redux = require('redux');

const createStore = redux.createStore;


const ADD_TASK = "ADD_TASK";
const ADD_REMINDER = "ADD_REMINDER";

function addTask(){
    return {
        type: ADD_TASK,
        info: 'First redux action'
    };
}

function addReminder(){
    return {
        type: ADD_REMINDER
    };
}

// reducer -> (previousState, action) => newUpdatedState

const initialState = {
    numberOfTasks: 0,
    numberOfReminders: 0
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TASK: return{
            ... state,
            numberOfTasks: state.numberOfTasks + 1
        }

        case ADD_REMINDER: return{
            ... state,
            numberOfReminders: state.numberOfReminders + 1
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
store.dispatch(addReminder());
store.dispatch(addReminder());
unsubscribe();

