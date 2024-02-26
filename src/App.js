import React, { useRef, useState, useMemo } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSamples from './InputSamples';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('숫자 셈');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'tester1',
        email: 'test1@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester2',
        email: 'test2@gmail.com',
        active:  false
    },
    {
        id: 3,
        username: 'tester3',
        email: 'test3@gmail.com',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user)
    )
  }


  const wave = 'nice body';
  const darkStyle = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}

      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수: {count}</div>
      <InputSamples/>
      <InputSample/>
      <Counter/>
      <Hello // 열리는 태그 안에서는 주석을 적을 수 있다 
      />
      <Hello comment="날씨가 좋죠?" isSpecial={true} />
      <Hello comment="으악 더러워" color='brown' isSpecial />
      <div style = {darkStyle}>안녕하지 못해요</div>
      <div>{wave}</div>
      <div className="gray-box">회색 상자</div>
      {/*주석은 중괄호를 포함할 것*/}
    </Wrapper>
  );
}

export default App;