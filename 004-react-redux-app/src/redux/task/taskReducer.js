import { ADD_TASK, ADD_TASKS } from './taskTypes'

const initialState = {
    numberOfTasks: 0
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK: return {
            ...state,
            numberOfTasks: state.numberOfTasks + 1
        }

        case ADD_TASKS: return {
            ...state,
            numberOfTasks: state.numberOfTasks + Number(action.payload)
        }

        default: return state
    }
}

export default taskReducer