import React, { Component } from 'react'
import "./auth.css"


class Login extends Component {

  render() {
    return (
    <div className="login-container">
      
      <div className="form-wrapper">
        <div className="form-box">
          <label>email:</label>
          <input  type="text"  placeholder="you@provider.com" />
          <label>password:</label>
          <input  type="password"  placeholder="*******" />
          <button type="submit" onClick={(e) => {}}>enter</button>
        </div>
      </div>

    </div>)
  }
}

export default Login;