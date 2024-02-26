import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle}) {
    useEffect(() => {
        console.log('짜잔');
        console.log(user);
        return () => {
            console.log('내가 사라져볼게 얍');
            console.log(user);
        };
    }, [user]); // 읭?

    // useEffect(() => {
    //     console.log(user);
    // });

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {

    const array = ['a', 'b', 'c', 'd'];

    return (
        <>
            {/* <div>
                <div>
                    <b>{users[0].username}</b> <span>({users[0].email})</span>
                </div>
                <div>
                    <b>{users[1].username}</b> <span>({users[1].email})</span>
                </div>
                <div>
                    <b>{users[2].username}</b> <span>({users[2].email})</span>
                </div>
            </div> */}
            {/* <div>
                <User user={users[0]} key={users[0].id} />
                <User user={users[1]} key={users[1].id} />
                <User user={users[2]} key={users[2].id} />
            </div> */}

            {/* 동적인 배열을 랜더링 하기 위해서는 map 함수를 사용할 것 */}
            <div>
                {users.map((user, index) => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/> 
                ))}
            </div>
            <div>
                {array.map(item => <div>{item}</div>)}
            </div>
        </>
    );
}

export default UserList;