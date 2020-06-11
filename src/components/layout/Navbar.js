import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from './Links/LogIn';
import LogOut from './Links/LogOut';
const Navbar = () => {
	return (
		<nav>
			<div>
				<Link to='/'>Shopping</Link>
				<LogIn />
				<LogOut />
				<Link to='/completedlists'>Completed Lists</Link>
			</div>
		</nav>
	);
};

export default Navbar;
