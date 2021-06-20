import { ADD_REMINDER } from "./reminderTypes"

const initialState = {
    numberOfReminders: 0
}

const reminderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REMINDER: return {
            ...state,
            numberOfReminders: state.numberOfReminders + 1
        }

        default: return state
    }
}

export default reminderReducer;