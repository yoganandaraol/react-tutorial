import { combineReducers } from 'redux'
import taskReducer from './task/taskReducer'
import reminderReducer from './reminder/reminderReducer'
import userReducer from './user/userReducer'

const reducer = combineReducers({
    task: taskReducer,
    reminder: reminderReducer,
    user: userReducer
})

export default reducer;