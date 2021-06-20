import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [
        {name: 'Yoga', age: 37},
        {name: 'Swetha', age: 27},
        {name: 'Nanya', age: 6},
        {name: 'Reshma', age: 4},
    ],
    error: ''
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case GET_USERS_SUCCESS: console.log('dispatcher called'); return {
            ...state,
            loading: false,
            users: state.users,
            error: ''
        }

        case GET_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }

}

export default userReducer