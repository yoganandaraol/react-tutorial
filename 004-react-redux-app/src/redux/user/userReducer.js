import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case GET_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
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