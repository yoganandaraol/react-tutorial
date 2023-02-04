import React, { useState, useEffect, useRef } from 'react';

const HookUseRef = () => {

    console.log('HookUseRef - Component Rendered');
    const [name, setName] = useState('');
/*
    // renders infinate time during useEffect
    const [renderCount, setRenderCount] = useState(0);
*/
    const renderCount = useRef(0);
    const txtNameRef = useRef();

    useEffect(() => {
        //setRenderCount(prevCount => prevCount + 1);
        renderCount.current = renderCount.current + 1;
    });

    const setFocus = () => {
        txtNameRef.current.focus();
        // dont do below - it will not update the state
        /*
        txtNameRef.current.value='Yogananda Rao Locherla';
        txtNameRef.current.onChange(e => setName(e.target.value));
        */
    }

    return (
        <div>
            <h2>useRef hook</h2>
            <input ref={txtNameRef} value={name} onChange={e => setName(e.target.value)} /><br />
            name: {name}
            <div>Rendered {renderCount.current} times</div>
            <button value={name} onClick={setFocus}> Focus </button>
            <hr />
        </div>
    )
}

export default HookUseRef;