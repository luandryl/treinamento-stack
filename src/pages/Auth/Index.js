import React, { Component } from 'react'
import { connect } from 'react-redux'

import DefaultPage from './../DefaultPage'

import Singup from './Signup'
import Login from './Login'

import "./auth.css"

class Auth extends Component {

  render () {

    let form = (this.props.isShowedLogin) ? <Login history={this.props.history} /> : <Singup history={this.props.history}/>
    
    return (
      <DefaultPage>
        <div className="auth-form-content">
          {form}
        </div>
      </DefaultPage>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    isShowedLogin: state.nav.isShowedLogin
  }
}

export default connect(mapStateToProps)(Auth);