import React, { useState } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const LogIn = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleEmail = event => {
		setEmail(event.target.value);
	};
	const handlePassword = event => {
		setPassword(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(email, password);
		props.onSignIn({ email, password });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Log In</h5>
				<div>
					<label>Email</label>
					<input type='email' id='email' onChange={handleEmail} />
				</div>
				<div>
					<label>Password</label>
					<input type='password' id='password' onChange={handlePassword} />
				</div>
				<div>
					<button>Log in</button>
				</div>
				<div>{props.authError ? <p>{props.authError}</p> : null}</div>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onSignIn: credentials => dispatch(signIn(credentials)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
