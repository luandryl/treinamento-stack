import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../../store/actions/authAction'

import Label from '../../components/labels/Label'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'
import "./auth.css"


class Login extends Component {

  constructor () {
    super()
    this.state = {
      login: '',
      password: ''
    }
  }


  handleLogin = e => {this.setState({login: e.target.value})}
  handlePassword = e => {this.setState({password: e.target.value})}

  handleClick = (e) => {
    e.preventDefault()
    this.props.login(this.state, this.props.history)
  }

  render() {
    return (
    <div className="login-container"> 
      <div className="form-wrapper">
        <div className="form-box">
          <Label text="login:" />
          <Input value={this.login} onChange={this.handleLogin} className="input-def" type="text"  placeholder="login" />
          <Label text="password:" />
          <Input value={this.password} onChange={this.handlePassword} className="input-def" type="password"  placeholder="*******" />
          <Button type="submit"  onClick={(e) => {this.handleClick(e)}} text="enter" className="btn-pr"  />
        </div>
      </div>

    </div>)
  }
}

Login.prototypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login)