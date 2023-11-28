import React, { useState } from 'react'

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordvalue] = useState('');
  const handleEmailChange = (e) => {
    setInputValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordvalue(e.target.value);
  };
  const handleSubmit = () =>{
    if(inputValue.endsWith('.ru') && passwordValue.length >= 8){
      alert('qebul oldu');
    
  }
  else{
    alert('sehv ')
  }}
  return (
    <div>
      <label>Email</label><br />
      <input type='email' value={inputValue}  onChange={handleEmailChange}/><br />
      <label>Password</label><br />
      <input type='password' value={passwordValue} onChange={handlePasswordChange} /><br />
      <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Form