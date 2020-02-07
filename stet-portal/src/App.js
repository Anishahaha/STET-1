import React, { Component } from 'react';
import './App.css';
import RegisterForm from './Register/RegisterPage.js';
import 'tachyons';
import LoginForm from './Login/LoginPage.js';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {

  onClickScroll = ()=>{ scrollToComponent()}

  render() {
      return (

          <div className="container">
                <img src="/home/saikiran/Desktop/STET/stet-portal/src/Register/unnamed.jpg"/>
                <h1 className="tc dib">STET Portal</h1>
                <hr/>
                <nav className="dt w-100 border-box pa3 ph5-ns">
                  <a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Register</a>
                  <a href="" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"  onClick={(event) => {event.preventDefault();scrollToComponent(this.LoginFormSection, { offset: 0, align: 'top', duration: 500})}}>Login</a>                </nav>
            <div className="row">
                <div className="col-md-6"><RegisterForm/></div>
                <div className="col-md-6">
                <br/>
                <br/>
                <br/>
                <hr/>
                <LoginForm/>
                </div>
                <section ref={(section) => { this.LoginFormSection = section; }}></section>
            </div>
          </div>
        );
  }
}

export default App;
