// import react from 'react';
import { connect } from 'react-redux'
import { addReminder } from '../redux'

function ReminderContainer(props) {
    return (
        <div>
            <h2>Number of Reminders - {props.numberOfReminders}</h2>
            <button onClick={props.addReminder}>Add Reminder</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfReminders : state.reminder.numberOfReminders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addReminder: () => dispatch(addReminder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer)