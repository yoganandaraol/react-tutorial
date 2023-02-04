import React, { useState, useReducer } from 'react';
import Todo from './Todo';
// Actions

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
}

const reducer = (state, action) => {
    console.log('reducer called', state, action)
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, isCompleted: !action.payload.isCompleted }
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, isCompleted: false }
}
const HookUseReducerTodos = () => {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    return (
        <div>
            <h2>Todos with Reducer</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
            {
                todos.map(item => {
                    return <Todo key={item.id} todo={item} dispatch={dispatch} />
                })
            }
            <hr />
        </div>
    )
}

export default HookUseReducerTodos;