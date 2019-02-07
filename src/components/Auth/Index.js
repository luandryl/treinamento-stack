import React, { Component } from 'react'

import Singup from './Signup'
import Login from './Login'

import "./auth.css"

class Auth extends Component {

  constructor () {
    super();
    this.state = {
      isActive: true
    }
  }

  activate = () => {
    this.setState({isActive : !this.state.isActive})
  }

  render () {

    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500
    }
    
    let form = (this.state.isActive) ? <Login /> : <Singup />
    
    let nav = (this.state.isActive) ? "signup" : "login"

    return (
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-content">
            <div className="controls-wrapper">
                <div className="ct">
                  <span onClick={this.activate}>{nav}</span>
                </div>
            </div>
            <div className="auth-form-content">
              {form}
            </div>
          </div>
          <div className="auth-image">
            <label> UNECTodo </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;