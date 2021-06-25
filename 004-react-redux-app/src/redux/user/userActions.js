import { 
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
 } from './userTypes'
 import axios from 'axios'

 export const getUsersRequest = () => {
     return {
         type: GET_USERS_REQUEST
     }
 }

 export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const getUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
}

export const getGitUsers = () => {
    return function(dispatch) {
        dispatch(getUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            let users = response.data
            dispatch(getUsersSuccess(users));
        })
        .catch(error => {
            dispatch(getUsersFailure(error))
        })
    }
}