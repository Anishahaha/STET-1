import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import axios from 'axios';

class ResultsPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {

			result: this.props.result
		}
	}

	handleDownload = ()=>{

		//edit this link so that a download can be initiated.
		axios.post('http://localhost:8000/download',this.state).then(response => {console.log(response.data);});
	}
	render()
	{
		return (

				<div>
				<div className="tc bg-light-blue">
					<h4>Download the admit card here</h4>
					<br/>
					<button onClick={this.handleDownload}>download</button>
				</div>
				
				</div>
			);
	}
}
export default ResultsPage;
// <div className="tc ma2 bg-light-green ba b--black">
// 					<h1>Result</h1>
// 					<p>Name: {this.state.result.name}</p>
// 					<p>Roll Number:{this.state.result.rollno}</p>
// 					<p>Rank:<span style={{color:'red'}}>{this.state.result.rank}</span></p>
// 				</div>