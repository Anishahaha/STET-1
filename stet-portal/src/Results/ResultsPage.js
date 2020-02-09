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
			let obj = {
				sd: "hh"
			}
		//edit this link so that a download can be initiated.
		axios(`http://localhost:8000/download`, {
			method: "GET",
			responseType: "blob"
			//Force to receive data in a Blob Format
		  })
			.then(response => {
			  //Create a Blob from the PDF Stream
			  const file = new Blob([response.data], {
				type: "application/pdf"
			  });
			  //Build a URL from the file
			  const fileURL = URL.createObjectURL(file);
			  //Open the URL on new Window
			  window.open(fileURL);
			})
			.catch(error => {
			  console.log(error);
			});
		};
	
	
	render()
	{
		return (

				<div className="tc bg-light-blue">
				<article className="mw8 center bg-white tc br3 shadow-3  pa3 pa4-ns mv3 ba b--blue">
					<h4>Download the admit card here</h4>
					<br/>
					<button onClick={this.handleDownload}>download</button>
				</article>
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