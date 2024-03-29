import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import Wrapper from './Wrapper';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('숫자 셈');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [{
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
  }]
}

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user)
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nextId = useRef(4);

  const { users } = state; //?
  const { username, email } = state.inputs;

  const onChange = useCallback ( e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
      }, []);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

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
    </Wrapper>
  );
}

export default App;