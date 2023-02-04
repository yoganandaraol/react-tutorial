import React, { useReducer } from 'react';

// Actions

const Actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}


const reducer = (state, action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return { count: state.count + 1 };
        case Actions.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
const HookUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    // const [count, setCount] = useState(0);
    const increment = () => {
        // setCount(prevValue => prevValue + 1);
        dispatch({ type: Actions.INCREMENT });
    }

    const decrement = () => {
        // setCount(prevValue => prevValue - 1);
        dispatch({ type: Actions.DECREMENT });
    }

    return (
        <div>
            <h2>useReducer hook</h2>
            <button onClick={decrement}>-</button>
            {/* <span>{count}</span> */}
            <span>{state.count}</span>
            <button onClick={increment}>+</button>

        </div>
    )
}

export default HookUseReducer;