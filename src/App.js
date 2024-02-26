import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const wave = 'nice body';
  const darkStyle = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      
      <Hello // 열리는 태그 안에서는 주석을 적을 수 있다 
      />
      <Hello/>
      <Hello/>
      <div style = {darkStyle}>안녕하지 못해요</div>
      <div>{wave}</div>
      <div className="gray-box">회색 상자</div>
      {/*주석은 중괄호를 포함할 것*/}
    </>
  );
}

export default App;