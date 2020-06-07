import React from 'react';
import { NavLink } from 'react-router-dom';
const LogIn = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/create">New List</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
    </ul>
  );
};

export default LogIn;
