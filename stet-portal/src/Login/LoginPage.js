import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ResultsPage from '../Results/ResultsPage.js';
import usersList from './usersList.js';

class LoginForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			rtype: '',
			password: '',
			username: '',
			message:''
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

		if(this.state.username in usersList){

				if(this.state.password === String(usersList[this.state.username]))
				{
					this.setState({message: 'Authentication Sucessful!'})
					event.preventDefault();
					this.setState({rtype: 'login'});
					//let newObj = Object.assign({},this.state);
					axios.post('http://localhost:8000/dat',this.state).then(response => {console.log(response.data);});

					// //the below statement is just a test.
					ReactDOM.render(<ResultsPage result={ {name:'saikiran',rollno:'123455',rank:1} } />, document.getElementById('root'));
				}
				else
				{
					console.log(this.state.password,usersList[this.state.username]);
					this.setState({message:'Invalid Password'});
				}
		}else
		{
			this.setState({message:'Invalid Username'});
		}
	}

		
	render()
	{
		return (

				<article className="mw8 center  tc  shadow-3 bg-white br3 pa3 pa4-ns mv3 ba b--blue">						<h1>Login</h1>
						<label className="tc ma2">Enter Username</label>
						<div><input type="text" onChange={this.onUsernameChange}/></div>
						<label className="tc ma2">Enter Password</label>
						<div><input type="password" onChange={this.onPasswordChange}/></div>
						<p className="blue">{this.state.message}</p>
						<button onClick={this.onSubmit} className="ma2">Login</button>
				<hr/>
				</article>
			);
	}
}

export default LoginForm;