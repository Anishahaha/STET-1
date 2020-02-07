import React, { Component } from 'react';
import './App.css';
import RegisterForm from './Register/RegisterPage.js';
import 'tachyons';
import LoginForm from './Login/LoginPage.js';

class App extends Component {
  render() {

      return (
          <div>
            <RegisterForm/>
          </div>
        );
  }
}

export default App;
