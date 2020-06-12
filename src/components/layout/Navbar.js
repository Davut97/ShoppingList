import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from './Links/LogIn';
import LogOut from './Links/LogOut';
import { connect } from 'react-redux';
const Navbar = props => {
	const { auth, profile } = props;
	const links = auth.uid ? (
		<div>
			<LogIn profile={profile} />{' '}
			<Link to='/completedlists'>Completed Lists</Link>
		</div>
	) : (
		<LogOut />
	);

	return (
		<nav>
			<div>
				<Link to='/'>Shopping</Link>
				{auth.isLoaded && links}{' '}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	// console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(Navbar);
