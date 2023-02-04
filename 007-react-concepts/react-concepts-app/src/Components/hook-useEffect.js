import React, { useState, useEffect } from 'react';

const HookUseEffect = () => {

    const [restype, setResType] = useState('');
    const [resItems, setResItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(() => window.innerWidth);
    }
    useEffect(() => {
        console.log('Component mounted');
    }, []); // by passing empty array as dependencies runs only on mount

    useEffect(() => {
        console.log('Resource Type Changed', restype);
        if (restype !== '') {
            fetch(`https://jsonplaceholder.typicode.com/${restype}`)
                .then(response => response.json())
                .then(json => setResItems(json))
        }
    }, [restype]);

    useEffect(() => {
        const listner = window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', listner); 
            // to window.eventListner listens in the background enen the component is unmounted 
            // so we need to explicity remove the evenlistener at the useEffect completes
        }
    }, []);

    return (
        <div>
            <h2>useEffect hook - {windowWidth}</h2>
            <button onClick={() => setResType('albums')}    >Albums     </button>
            <button onClick={() => setResType('todos')}     >Todos      </button>
            <button onClick={() => setResType('comments')}  >Comments   </button>
            <button onClick={() => setResType('posts')}     >Posts      </button>
            <h2>{restype}</h2>
            {resItems.map(item => {
                return <div>{JSON.stringify(item)}</div>
            })}
            <hr />
        </div>
    )
}

export default HookUseEffect;