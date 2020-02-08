import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import axios from 'axios';
import './Register.css';


class RegisterForm extends React.Component
{
	constructor()
	{
		super();
		this.state = {

				rtype:'',
			    cname: '',
			    cmname: '',
			    cfname: '',
			    cempstatus: '',
			    caddr: '',
			    clang: '',
			    caadhar: '',
			    cgender: '',
			    cemail: '',
			    cmobile: '',
			    csecondl: '',
			    cdob: '',
			    cexamcenter: '',
			    cdegree: '',
			    cfirstl: '',
			    ccategory: '',
			    cexamstatus: '',
			    crelaxation: '',
			    cfile: '',
			    cnewpass: '',
			    cconfirmpass: ''
	

		};

		

	}

	//there are 21 state update handlers.

	onChangeCandidateName = (event) => { this.setState({ cname: event.target.value});};
	onChangeFatherName = (event) => {this.setState({cfname: event.target.value});};
	onChangeMotherName = (event) => {this.setState({cmname: event.target.value});};
	onChangeFileUpload = (event) => {this.setState({cfile: event.target.value});};
	onChangeEmploymentStatus = (event) => {this.setState({cempstatus: event.target.value});};
	onChangeAddress = (event) => {this.setState({caddr: event.target.value});};
	onChangeLanguage = (event) => {this.setState({clang: event.target.value});};
	onChangeAadhar = (event) => {this.setState({ caadhar: event.target.value});};
	onChangeGender = (event) => {this.setState({cgender: event.target.value});};
	onChangeEmail = (event) => {this.setState({cemail: event.target.value});};
	onChangeMoblile = (event) => {this.setState({cmobile: event.target.value});};
	onChangeSecondLanguage = (event) => {this.setState({csecondl: event.target.value});};
	onChangeDOB = (event) => {this.setState({cdob: event.target.value});};
	onChangeExamCenter = (event) => {this.setState({cexamcenter: event.target.value});};
	onChangeQualification = (event) => {this.setState({cdegree: event.target.value});};
	onChangeFirstLanguage = (event) => {this.setState({cfirstl: event.target.value});};
	onChangeCategory = (event) => {this.setState({ccategory: event.target.value});};
	onChangeExamStatus = (event) => {this.setState({cexamstatus: event.target.value});};
	onChangeRelaxation = (event) => {this.setState({crelaxation: event.target.value});};
	onChangeNewPassword = (event) => {this.setState({cnewpass: event.target.value});};
	onChangeConfirmPassword = (event) => {this.setState({cconfirmpass: event.target.value});};

	
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({rtype: 'register'});
		console.log("smd")
		let newObj = Object.assign({},this.state);
		axios.post('http://localhost:8000/dat',newObj).then(response => {console.log(response.data);});
	};
	render()
	{
		return(
		
		<div className="tc">
			<hr/>

			
			<article className="mw8 center bg-white tc br3 shadow-3  pa3 pa4-ns mv3 ba b--blue">
			<h1>Register</h1>
			<form onSubmit={ this.handleSubmit }>
				<div className="ma2"><label>Candidate's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeCandidateName}/><br/></div>
				<div className="ma2"><label>Mother's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeMotherName}/><br/></div>
				<div className="ma2"><label>Father's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeFatherName}/><br/></div>


				<div className="ma2"><label>Employment Status: </label>
					 <select onChange={this.onChangeEmploymentStatus}>
					  <option value="employed">employed</option>
					  <option value="unemployed">unemployed</option>
					</select>
					</div> 
				<br/>
				<div className="tc dib">
					    <label htmlFor="comment" className="f6 b db mb2">Address: </label>
    					<textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" onChange={this.onChangeAddress}>
    					</textarea>
    			</div>
				<br/>
				
				<div className="ma2">				
				<label>Language: </label>
					<select onChange={this.onChangeLanguage}>
					 <option value="hindi">Hindi</option>
					  <option value="Nepali">Nepali</option>
					  <option value="Sikkimese">Sikkimese</option>
					  <option value="Lepcha">Lepcha</option>
					  <option value="English">English</option>
					</select>
					<br/>
				</div>

				<div className="ma2">
				<label>Aadhar Number: </label>
				<input type="text" className="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeAadhar}/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Gender: </label>
				<select onChange={this.onChangeGender}>
					 <option value="Male">Male</option>
					  <option value="Female">Female</option>
					  <option value="Other">Other</option>
					</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Email: </label>
				<input type="email" className="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeEmail}/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Mobile No.: </label>
				<input type="text" className="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeMoblile}/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Second Language: </label>
					<select onChange={this.onChangeSecondLanguage}>
					 <option value="hindi">Hindi</option>
					  <option value="Nepali">Nepali</option>
					  <option value="Sikkimese">Sikkimese</option>
					  <option value="Lepcha">Lepcha</option>
					  <option value="English">English</option>
					</select>
					<br/>
					</div>

				<div className="ma2">				
				<label htmlFor="start">Date of Birth:</label>
				<input type="date" id="dob" name="" min="1970-01-01" max="2018-12-31" onChange={this.onChangeDOB}/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Exam Center Preference: </label>
				<select onChange={this.onChangeExamCenter}>
				 <option value="NONE">NONE</option>
				</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Qualification: </label>
				<select onChange={this.onChangeQualification}>
				<option value="10th SSC">10th SSC</option>
				 <option value="PU">Pre University</option>
				 <option value="Bsc">B.Sc</option>
				 </select>
				 <br/>
				 </div>

				<div className="ma2">				
				 <label>First Language: </label>
					<select onChange={this.onChangeFirstLanguage}>
					 <option value="hindi">Hindi</option>
					  <option value="Nepali">Nepali</option>
					  <option value="Sikkimese">Sikkimese</option>
					  <option value="Lepcha">Lepcha</option>
					  <option value="English">English</option>
					</select>
					<br/>
				</div>

				<div className="ma2">				
				<label>Category: </label>
					<select onChange={this.onChangeCategory}>
					 <option value="Unknown">Unknown</option>
					</select>
					<br/>
				</div>

				<div className="ma2">				
				<label>Status Of the qualifying exam:</label>
				<select onChange={this.onChangeExamStatus}>
					 <option value="success">Sucessful</option>
					  <option value="pending">Pending</option>
					  <option value="unsuccessful">Unsuccessful</option>
				</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Are you eligible for any relaxation:</label>
				<input placeholder="Any relaxation can be mentioned here." className="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onChangeRelaxation}></input>
				<br/>
				</div>

				<div className="ma2 tc">				
				<label htmlFor="password" className="f6 b dib mb2">Create Password:</label>
			    <input className="input-reset ba b--black-20 pa2 mb2 dib" type="password" id="password" aria-describedby="password-desc" onChange={this.onChangeNewPassword}/>
			    </div>


				<div className="ma2">				
			    <label htmlFor="password" className="f6 b dib mb2">Confirm Password :</label>
			    <input className="input-reset ba b--black-20 pa2 mb2 dib" type="password" id="password" aria-describedby="password-desc" onChange={this.onChangeConfirmPassword}/>
				</div>


				<div className="ma2">
					<label><strong>Upload document.</strong></label>
					<input type="file" name="fileToUpload" id="fileToUpload" onChange={this.onChangeFileUpload}/>
				<br/>

				<div className="ma2">				
				<button type="submit" >Submit</button>
				</div>
				<br/>
				</div>
			</form>
			</article>
		</div>
		);	
	}
}

export default RegisterForm;