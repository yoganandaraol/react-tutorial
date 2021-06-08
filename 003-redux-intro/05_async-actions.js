const redux = require('redux')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

const getUsersRequest = () => {
    return {
        type: GET_USERS_REQUEST
    }
}

const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

const getUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    //console.log(action.type)
    switch(action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case GET_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            console.log('Default action triggered')
    }
}

// Create async action creator
// so far an action creator retuns an action
// redux thunk brings the ability to action creator to return a function instead of an action object
const getUsers = () => {
    return function(dispatch) {
        // this fucntion doesnt need to be pure.. means it can have side effects
        dispatch(getUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the arry of users
            const users = response.data.map(user => user.id)
            dispatch(getUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(getUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(getUsers())