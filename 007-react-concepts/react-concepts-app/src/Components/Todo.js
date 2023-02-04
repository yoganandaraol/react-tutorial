import React from 'react';
import { ACTIONS } from './hook-useReducerTodos';

const Todo = ({ todo, dispatch }) => {

    return (
        <div>
            <span style={{ color: todo.isCompleted ? '#AAA' : '#000', width:'250px' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo })}>Delete</button>
        </div>

    )
}

export default Todo;