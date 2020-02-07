import React from 'react';
import ReactDOM from 'react-dom';



class LoginForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {

			password: '',
			username: ''

		};
	}
	onPasswordChange = (event) => 
	{
		this.setState({password: event.target.value})
	}
	onUsernameChange = (event) => {

		this.setState({username : event.target.value});
	}
	onSubmit = (event) => {

		// code for things to do on submit.
	}
	render()
	{
		return (

				<div className ="tc bg-light-blue ba b--black">
				<hr/>
						<h2>Login</h2>
						<label className="tc ma2">Enter Username</label>
						<div><input type="text" onChange={this.onUsernameChange}/></div>
						<label className="tc ma2">Enter Password</label>
						<div><input type="password" onChange={this.onPasswordChange}/></div>
						<button onClick={this.onSubmit} className="ma2">Login</button>
				<hr/>
				</div>
			);
	}
}

export default LoginForm;