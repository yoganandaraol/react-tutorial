import { ADD_TASK, ADD_TASKS } from './taskTypes'

export const addTask = () => {
    return {
        type: ADD_TASK
    }
}

export const addTasks = (number = 1) => {
    return {
        type: ADD_TASKS,
        payload: number
    }
}
