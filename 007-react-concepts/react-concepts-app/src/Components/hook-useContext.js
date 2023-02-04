import React, { useState } from 'react';
import Parent from './parent';

export const UserPrefContext = React.createContext('React');
export const UserPrefUpdateContext = React.createContext();

const HookUseContext = () => {

    const [userPref, setUserPref] = useState(() => (
        {name: 'Yoga', theme: 'dark', isActive: true }
    ));

    const updateUserPref = () => {
        setUserPref((prevState) => (
            {
            ...prevState,
            theme: prevState.theme === 'dark' ? 'light' : 'dark'}
        ))
    }

    return (
        <div>
            <h2>useContext hook</h2>

            <UserPrefContext.Provider value={userPref} >
                <UserPrefUpdateContext.Provider value={updateUserPref}>
                    <Parent />
                </UserPrefUpdateContext.Provider>
            </UserPrefContext.Provider>
            <hr />
        </div>
    )
}

export default HookUseContext;