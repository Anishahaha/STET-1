import React from 'react';
import ReactDOM from 'react-dom';
import Username from './Username.js';
import Password from './Password.js';


class LoginForm extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return (

				<div className ="tc">
				<hr/>
						<h1>Login</h1>
						<label>Email:</label>
						<Username />
						<label>Password</label>
						<Password />
						<button type="submit">login</button>
				<hr/>
				</div>
			);
	}
}

export default LoginForm;