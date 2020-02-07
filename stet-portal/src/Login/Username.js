import React from 'react';
import ReactDOM from 'react-dom';


class Username extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {

					username: ''
				};
	}
	onUsernameChange = (event) =>
	{
		this.setState({username: event.target.value});
	}
	render()
	{
		return(
		<div>
			<input type="text" onChange={this.onUsernameChange}/>
		</div>
		);
	}
}
export default Username;