import React, { useState } from 'react'

const RegisterForm = () => {
  const [formData, setformData] = useState({name: "", email: "", password: ""});

  const handleChange = (event) => {
    setformData({...formData, [event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("送信されました",formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>登録</h2>

        <input type='text' placeholder='name' onChange={handleChange} />
        <input type='email' placeholder='email' onChange={handleChange} />
        <input type='password' placeholder='password' onChange={handleChange} />
        <button type='submit'>→</button>
      </form>
    </div>
  )
}

export default RegisterForm