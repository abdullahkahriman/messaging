import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = (props) => {
    const [text, setText] = useState('')
    const [messageCount, setMessageCount] = useState(0);

    return (
        <MainContext.Provider
            value={{
                text,
                setText,
                messageCount,
                setMessageCount
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext };