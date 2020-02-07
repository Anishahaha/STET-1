import React, { Component } from 'react';
import './App.css';
import RegisterForm from './Register/RegisterPage.js';
import 'tachyons';
import LoginForm from './Login/LoginPage.js';

class App extends Component {
  render() {

      return (

          <div className="container">
                <nav className="dt w-100 border-box pa3 ph5-ns">
                  <a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Register</a>
                  <a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Login</a>
                  <a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Results</a>
                </nav>
            <div className="row">
                <div className="col-md-6"><RegisterForm/></div>
                <div className="col-md-6"><LoginForm/></div>
            </div>
          </div>
        );
  }
}

export default App;
