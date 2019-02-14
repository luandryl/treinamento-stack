import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Label from '../../components/labels/Label'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'
import "./auth.css"


class Login extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }


  handleEmail = e => {this.setState({email: e.target.value})}
  handlePassword = e => {this.setState({password: e.target.value})}

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
    <div className="login-container"> 
      <div className="form-wrapper">
        <div className="form-box">
          <Label text="email:" />
          <Input value={this.email} onChange={this.handleEmail} className="input-def" type="text"  placeholder="you@provider.com" />
          <Label text="password:" />
          <Input value={this.password} onChange={this.handlePassword} className="input-def" type="password"  placeholder="*******" />
          <Button type="submit"  onClick={(e) => {this.handleClick(e)}} text="enter" className="btn-pr"  />
        </div>
      </div>

    </div>)
  }
}

export default withRouter(Login)