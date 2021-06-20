import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../redux/task/taskActions'
import { addReminder } from '../redux/reminder/reminderActions'

function ItemContainer(props) {
    return (
        <div>
            <h2> Item - { props.item } </h2>
            <button onClick={props.addItem}> Add Items </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.task
        ? state.task.numberOfTasks
        : state.reminder.numberOfReminders

    return {
        item: itemState
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction  = ownProps.task
        ? () => dispatch(addTask())
        : () => dispatch(addReminder())

    return {
        addItem: dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)