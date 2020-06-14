import React from 'react';
import {NavLink} from 'react-router-dom';
const LogOut = () => {
  return (
    <ul>
      <li>
        <NavLink to='/signup'>Signup</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Log in</NavLink>
      </li>
    </ul>
  );
};

export default LogOut;
