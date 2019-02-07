import React, { Component } from 'react'
import "./auth.css"


class Login extends Component {

  render() {
    return (
    <div className="login-container">
      
      <div className="form-wrapper">
        <div className="form-box">
          <label>name:</label>
          <input  type="text" placeholder="Mark Z" />
          <label>email:</label>
          <input  type="text" placeholder="you@provider.com" />
          <label>password:</label>
          <input  type="password" placeholder="*******" />

          <div className="check-input">
            <input type="text"  placeholder="3+2=?" />
          </div>
        
          <button type="submit ">create acount</button>
        </div>
      </div>

    </div>)
  }
}

export default Login;