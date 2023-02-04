import { useState } from 'react';

const HookUseState = () => {

    console.log('Component Rendered');
    const [count, setCount] = useState(() => 0);
    // useState returns an array of value and valueSetter respectively
    const arrState = useState(5);

    // useState is used to set value to an object..
    // every time you set the object value it overwrites entire value
    const [user, setUser] = useState({ name: 'Yoga', score:10 });

    const doSomeThing = () => {
        setUser(oldState => {
            // this return overrites entire object
            /*
            return {
                score: oldState.score+1
            }
            */
           return {
            ...oldState,
            score: oldState.score + 1,
           }
        })
    }

/*
    // useState cant be called conditionally
    // React Hooks must be called in the exact same order in every component render
    if (count == 3) {
        const [bonus, setBonus] = useState(2);
    }
*/
    const incrementCount = () => {
        setCount(count + 1);
        setCount(count => count + 1);
        // if setCount is used in multiple times in same scope 
        // use functions to update the value

        arrState[1](v => v * 2)
    }

    return (
        <div>
            <h2>useState hook</h2> 
            <br />
            <input type='button' onClick={incrementCount} value='increment' />
            <br />
            count - {count} <br />
            bonus - {arrState[0]} <br />
            <br />
            <br />
            <input type='button' onClick={doSomeThing} value='do something' />
            <br />
            name - {user.name} <br />
            score - {user.score}
            <hr />
        </div>
    );
}

export default HookUseState;