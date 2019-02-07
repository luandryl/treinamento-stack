import React, { Component } from 'react'

import DefaultPage from './../DefaultPage'

import Singup from './Signup'
import Login from './Login'
import Span from './../../components/span/Span'

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
      <DefaultPage>
        <div className="control-wrapper">
          <Span onClick={this.activate} className="span-pr hover" text={nav} />
        </div>
        <div className="auth-form-content">
          {form}
        </div>
      </DefaultPage>
    );
  }
}

export default Auth;