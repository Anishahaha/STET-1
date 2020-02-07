import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class LoginForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			rtype: '',
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
		event.preventDefault();
		this.setState({rtype: 'login'});
		//let newObj = Object.assign({},this.state);
		axios.post('http://localhost:8000/dat',this.state).then(response => {console.log(response.data);});
	}
	render()
	{
		return (

				<article className="mw8 center  tc  shadow-3 bg-white br3 pa3 pa4-ns mv3 ba b--blue">
				<hr/>
						<h2>Login</h2>
						<label className="tc ma2">Enter Username</label>
						<div><input type="text" onChange={this.onUsernameChange}/></div>
						<label className="tc ma2">Enter Password</label>
						<div><input type="password" onChange={this.onPasswordChange}/></div>
						<button onClick={this.onSubmit} className="ma2">Login</button>
				<hr/>
				</article>
			);
	}
}

export default LoginForm;