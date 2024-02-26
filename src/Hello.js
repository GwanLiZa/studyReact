import React from 'react';

function Hello({color, comment, isSpecial}) {
    return (
        <div style={{color : color}}>
            { isSpecial ? <b>*</b> : null }
            { isSpecial && <b>*</b> }
            안녕하세요 {comment}
        </div>
    )
}

Hello.defaultProps = {
    color: 'blue',
    comment: '없음',
    isSpecial: false
}

export default Hello;