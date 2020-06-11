import React, { useState } from 'react';

const SignUp = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const handleChangeEmail = event => {
		setEmail(event.target.value);
	};
	const handleChangePassword = event => {
		setPassword(event.target.value);
	};
	const handleChangeFirstName = event => {
		setFirstName(event.target.value);
	};
	const handleChangeLastName = event => {
		setLastName(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(email, password, firstName, lastName);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='white'>
				<h5>Sign Up</h5>
				<div>
					<label>Email</label>
					<input type='email' id='email' onChange={handleChangeEmail} />
				</div>
				<div>
					<label>Password</label>
					<input
						type='password'
						id='password'
						onChange={handleChangePassword}
					/>
				</div>
				<div>
					<label>First Name</label>
					<input type='text' id='firstName' onChange={handleChangeFirstName} />
				</div>
				<div>
					<label>Last Name</label>
					<input type='text' id='lastName' onChange={handleChangeLastName} />
				</div>
				<div>
					<button>Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
