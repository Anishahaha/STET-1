import React from 'react';
import ReactDOM from 'react-dom';


class Password extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
				password: ''
		}
	}
	onPasswordChange = (event) => 
	{
		this.setState({password: event.target.value})
	}
	render()
	{
		return(
		<div>
			<input type="password" onChange={this.onPasswordChange}/>
		</div>
		);
	}
}
export default Password;