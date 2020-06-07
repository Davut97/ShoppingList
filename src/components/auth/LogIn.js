import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign In</h5>
        <div>
          <label>Email</label>
          <input type="email" id="email" onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" onChange={handleChangePassword} />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
