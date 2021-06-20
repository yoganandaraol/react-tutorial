import { useState } from 'react'
import { connect } from 'react-redux'
import { addTask, addTasks } from '../redux'

function SuperTaskContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of Tasks - {props.numberOfTasks}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.addTasks(number)}>Add {number} Task(s)</button>
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
        addTasks: number => dispatch(addTasks(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperTaskContainer)