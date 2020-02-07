import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

class RegisterForm extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(
		
		<div className="tc">
			<nav className="dt w-100 border-box pa3 ph5-ns">
				<a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Register</a>
				<a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Login</a>
				<a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Results</a>
			</nav>
			<hr/>
			<form action="" method="">
				<div className="ma2"><label>Candidate's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure"/><br/></div>
				<div className="ma2"><label>Mother's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure"/><br/></div>
				<div className="ma2"><label>Father's Name: </label><input type="text" className="ba b--black pa2 input-reset ba bg-transparent w-100 measure"/><br/></div>
				<div className="ma2"><label>Employment Status: </label>
					 <select>
					  <option value="employed">employed</option>
					  <option value="unemployed">unemployed</option>
					</select>
					</div> 
				<br/>
				<div className="tc dib">
					    <label for="comment" class="f6 b db mb2">Address: </label>
    					<textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc">
    					</textarea>
    			</div>
				<br/>
				
				<div className="ma2">				
				<label>Language: </label>
					<select>
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
				<input type="text" className="pa2 input-reset ba bg-transparent w-100 measure"/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Gender: </label>
				<select>
					 <option value="Male">Male</option>
					  <option value="Female">Female</option>
					  <option value="Other">Other</option>
					</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Email: </label>
				<input type="email" className="pa2 input-reset ba bg-transparent w-100 measure"/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Mobile No.: </label>
				<input type="text" className="pa2 input-reset ba bg-transparent w-100 measure"/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Second Language: </label>
					<select>
					 <option value="hindi">Hindi</option>
					  <option value="Nepali">Nepali</option>
					  <option value="Sikkimese">Sikkimese</option>
					  <option value="Lepcha">Lepcha</option>
					  <option value="English">English</option>
					</select>
					<br/>
					</div>

				<div className="ma2">				
				<label for="start">Date of Birth:</label>
				<input type="date" id="dob" name="" min="1970-01-01" max="2018-12-31"/>
				<br/>
				</div>

				<div className="ma2">				
				<label>Exam Center Preference: </label>
				<select>
				 <option value="NONE">NONE</option>
				</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Qualification: </label>
				<select>
				<option value="10th SSC">10th SSC</option>
				 <option value="PU">Pre University</option>
				 <option value="Bsc">B.Sc</option>
				 </select>
				 <br/>
				 </div>

				<div className="ma2">				
				 <label>First Language: </label>
					<select>
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
					<select>
					 <option value="Unknown">Unknown</option>
					</select>
					<br/>
				</div>

				<div className="ma2">				
				<label>Status Of the qualifying exam:</label>
				<select>
					 <option value="success">Sucessful</option>
					  <option value="pending">Pending</option>
					  <option value="unsuccessful">Unsuccessful</option>
				</select>
				<br/>
				</div>

				<div className="ma2">				
				<label>Status Of the qualifying exam:</label>
				<input placeholder="Any relaxation can be mentioned here." className="pa2 input-reset ba bg-transparent w-100 measure"></input>
				<br/>
				</div>

				<div className="ma2 tc">				
				<label for="password" class="f6 b dib mb2">Create Password:</label>
			    <input class="input-reset ba b--black-20 pa2 mb2 dib w-10" type="password" id="password" aria-describedby="password-desc"/>
			    </div>


				<div className="ma2">				
			    <label for="password" class="f6 b dib mb2">Confirm Password :</label>
			    <input class="input-reset ba b--black-20 pa2 mb2 dib w-10" type="password" id="password" aria-describedby="password-desc"/>
				</div>

				<div className="ma2">				
				<button type="submit">Submit</button>
				</div>
				<br/>
			</form>
		</div>
		);	
	}
}

export default RegisterForm;