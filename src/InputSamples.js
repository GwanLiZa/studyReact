import React, { useState, useRef } from 'react';

function InputSamples() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        //console.log( e )
        setInputs({
            ...inputs,
            [name]: value,
        })
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
        //console.log(nameInput.current.name);
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} ref={nameInput}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSamples;