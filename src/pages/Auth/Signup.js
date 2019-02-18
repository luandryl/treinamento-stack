import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { signup } from '../../store/actions/authAction'

import Label from '../../components/labels/Label'
import InputDef from '../../components/inputs/Input'
import Button from '../../components/button/Button'

import "./auth.css"


class Signup extends Component {

  constructor () {
    super()
    this.state = {
      redirect: false,
      first_name: '',
      last_name: '',
      login: '',
      email: '',
      password: '',
      check: ''
    }
  }

  handleFirstName = (e) => {this.setState({first_name: e.target.value})}
  handleLastName = (e) => {this.setState({last_name: e.target.value})}
  handleLogin = (e) => {this.setState({login: e.target.value})}
  handleEmail = (e) => {this.setState({email: e.target.value})}
  handlePassword = (e) => {this.setState({password: e.target.value})}
  handleCheck = (e) => {this.setState({check: e.target.value})}

  handleClick = (e) => {
    e.preventDefault()
    let newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      login: this.state.login,
      email: this.state.email,
      password: this.state.password
    }
    
    this.props.signup(newUser, this.props.history)
  }

  render() {
    return (
    <div className="login-container">
      
      <div className="form-wrapper">
        <div className="form-box">
          <Label text="first name:" />
          <InputDef value={this.state.name} onChange={this.handleFirstName} className="input-def" type="text" placeholder="Mark" />
          <Label text="last name:" />
          <InputDef value={this.state.name} onChange={this.handleLastName} className="input-def" type="text" placeholder="Zuck" />
          <Label text="login:" />
          <InputDef value={this.state.name} onChange={this.handleLogin} className="input-def" type="text" placeholder="Zurckerman" />
          <Label text="email:" />
          <InputDef value={this.state.email} onChange={this.handleEmail} className="input-def" type="text" placeholder="you@provider.com" />
          <Label text="password:" />
          <InputDef value={this.state.password} onChange={this.handlePassword} className="input-def" type="password" placeholder="*******" />

          <div className="check-input">
            <InputDef value={this.state.check} onChange={this.handleCheck} className="input-ck" type="text"  placeholder="3+2=?" />
          </div>
        
          <Button type="submit" onClick={(e) => {this.handleClick(e)}} text="create acount" className="btn-pr" />
        </div>
      </div>

    </div>)
  }
}

Signup.prototypes = {
  signup: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps, {signup}) (Signup);