import React, { useState, useMemo } from 'react';

const HookUseMemo = () => {

    const [number, setNumber] = useState(10);
    const [favColor, setFavColor] = useState(true);
    const multiplier = useMemo(() => slowFunction(number), [number]);
    const styles = {
        backgroundColor: favColor ? 'orange' : 'white',
        color: favColor ? 'white' : 'orange',
        fontWeight: 'bold',
    }

    return (
        <div>
            <h2>useMemo hook</h2>
            <br />
            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <br />
            <div>{multiplier}</div>
            <br /> <button onClick={ () => setFavColor(isSun => !isSun) } >Change Theme [Sun / Moon] </button>
            <div style={styles}>{favColor ? 'Sun' : 'Moon'}</div>
            <hr />

        </div>
    )
}

export default HookUseMemo;

const slowFunction = (n) => {
    console.log('Slow Function');
    for (let i=0; i<= 1000000000; i++) {}
    return n * 2;
}