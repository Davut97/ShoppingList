import React from 'react';
import {NavLink} from 'react-router-dom';
import {MDBNavItem, MDBNavLink} from 'mdbreact';
const LogOut = () => {
  return (
    <>
      <MDBNavItem>
        <MDBNavLink to='/signup'>Signup</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to='/login'>Log in</MDBNavLink>
      </MDBNavItem>
    </>
  );
};

export default LogOut;
