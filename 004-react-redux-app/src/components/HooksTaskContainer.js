import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../redux'

function HooksTaskContainer() {

    const numberOfTasks = useSelector(state => state.task.numberOfTasks)
    const dispatch = useDispatch()

    return (
        <div>
            <h2> Number of Tasks - { numberOfTasks }</h2>
            <button onClick={() => dispatch(addTask())}>Add Task</button>
        </div>
    )
}

export default HooksTaskContainer