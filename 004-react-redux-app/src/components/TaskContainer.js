import { connect } from 'react-redux'
import { addTask } from '../redux'

function TaskContainer(props) {
    return (
        <div>
            <h2>Number of Tasks - {props.numberOfTasks}</h2>
            <button onClick={props.addTask}>Add Task</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfTasks : state.task.numberOfTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: () => dispatch(addTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)