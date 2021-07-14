/**
 * This example demonstrates that reducers are pure functions which cant handle side effects
 * So redux need some middleware to work with async actions
 * Some Middlewares
 *      redux-thunk
 *      redux-saga
 *      redux-observable
 */

// import redux from 'redux'; // ES6 style of importing
const redux = require('redux');
const createStore = redux.createStore;
const axios = require('axios');

const GET_USERS = "GET_USERS";

function getUsers(){
    return {
        type: GET_USERS,
    };
}

// reducer -> (previousState, action) => newUpdatedState

const initialState = {
    users: [
        {name: "Yoga"}
    ]
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_USERS:
            console.log("Before Api call", state.users)
            var usersData = null;
            axios.get('https://api.github.com/users')
                .then(response => {
                    usersData = response.data.map(user => user.login)
                    console.log("Api call success", usersData);
                })
            return {
                ...state,
                users: usersData
            }

        default: return state
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(getUsers());
unsubscribe();

