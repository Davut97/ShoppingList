import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
const LogIn = props => {
	return (
		<ul>
			<li>
				<NavLink to='/create'>New List</NavLink>
			</li>
			<li>
				<a onClick={props.OnSignOut}>Log out</a>
			</li>
		</ul>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		OnSignOut: () => dispatch(signOut()),
	};
};
export default connect(null, mapDispatchToProps)(LogIn);
