import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LogIn from './Links/LogIn';
import LogOut from './Links/LogOut';
import {connect} from 'react-redux';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact';
import './Links/Navbar.css'

const Navbar = (props) => {
  const {auth, profile} = props;
  const [isOpen, setIsOPen] = useState(false);
  const toggleCollapse = () => {
    setIsOPen(!isOpen);
  };
  const links = auth.uid ? (
    <div>
      <LogIn profile={profile} />{' '}
      <MDBNavLink to='/completedlists'>Completed Lists</MDBNavLink>
    </div>
  ) : (
    <LogOut />
  );

  return (
    // <nav>
    //   <div>
    //     <Link to='/'>Shopping</Link>
    //     {auth.isLoaded && links}{' '}
    //   </div>
    // </nav>
    <div className="two">
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand>
        <strong className='white-text'>Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to='/'>HOME</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>{links}</MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className='d-none d-md-inline'>Dropdown</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className='dropdown-default'>
                <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Something else here</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className='waves-effect waves-light' to='#!'>
              <MDBIcon icon='sign-in-alt' />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='waves-effect waves-light' to='#!'>
              <MDBIcon fab icon='google-plus-g' />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon='user' />
              </MDBDropdownToggle>
              <MDBDropdownMenu className='dropdown-default'>
                <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Something else here</MDBDropdownItem>
                <MDBDropdownItem href='#!'>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
