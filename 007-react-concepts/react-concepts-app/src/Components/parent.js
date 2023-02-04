import React, { useContext } from 'react';
import { UserPrefContext, UserPrefUpdateContext } from './hook-useContext';

const Parent = () => {

    const userPref = useContext(UserPrefContext);
    const userPrefUpdate = useContext(UserPrefUpdateContext);
    const themeStyle = {
        backgroundColor: userPref.theme === 'dark' ? '#444' : '#BBBB',
        color: userPref.theme === 'dark' ? '#BBB' : '#444',
        padding: '2rem',
        margin: '2rem',
    }
    console.log(userPref);

    return (
        <>
            <button onClick={userPrefUpdate}>Change Theme</button>
            <div style={themeStyle}>
                {userPref.name}
            </div>
        </>

    )
}

export default Parent;