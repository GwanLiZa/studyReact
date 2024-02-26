import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({users}) {

    const array = ['a', 'b', 'c', 'd'];

    return (
        <>
            <div>
                <div>
                    <b>{users[0].username}</b> <span>({users[0].email})</span>
                </div>
                <div>
                    <b>{users[1].username}</b> <span>({users[1].email})</span>
                </div>
                <div>
                    <b>{users[2].username}</b> <span>({users[2].email})</span>
                </div>
            </div>
            <div>
                <User user={users[0]} key={users[0].id} />
                <User user={users[1]} key={users[1].id} />
                <User user={users[2]} key={users[2].id} />
            </div>
            <div>
                {users.map((user, index) => (
                    <User user={user} key={index} /> 
                ))}
            </div>
            <div>
                {array.map(item => <div>{item}</div>)}
            </div>
        </>
    );
}

export default UserList;