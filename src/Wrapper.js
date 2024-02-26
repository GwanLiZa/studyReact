import React from 'react';

function Wrapper({ children }) {
    const boxStyle = {
        border: '2px solid black',
        padding: '16px'
    };

    return (
        <div style={boxStyle}>
            {children}
        </div>
    )
}

export default Wrapper;