import React from 'react';

function Hello({color, comment}) {
    return <div style={{color : color}}>안녕하세요 {comment}</div>
}

Hello.defaultProps = {
    color: 'blue',
    comment: '없음'
}

export default Hello;