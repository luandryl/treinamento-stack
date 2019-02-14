import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Label from '../../components/labels/Label'
import InputDef from '../../components/inputs/Input'
import Button from '../../components/button/Button'

import "./auth.css"


class Signup extends Component {

  constructor () {
    super()
    this.state = {
      redirect: false,
      name: '',
      email: '',
      password: '',
      check: ''
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/todo/')
  }

  render() {
    return (
    <div className="login-container">
      
      <div className="form-wrapper">
        <div className="form-box">
          <Label text="name:" />
          <InputDef value={this.state.name} className="input-def" type="text" placeholder="Mark Z" />
          <Label text="email:" />
          <InputDef value={this.state.email} className="input-def" type="text" placeholder="you@provider.com" />
          <Label text="password:" />
          <InputDef value={this.state.password} className="input-def" type="password" placeholder="*******" />

          <div className="check-input">
            <InputDef value={this.state.check} className="input-ck" type="text"  placeholder="3+2=?" />
          </div>
        
          <Button type="submit" onClick={(e) => {this.handleClick(e)}} text="create acount" className="btn-pr" />
        </div>
      </div>

    </div>)
  }
}

export default withRouter(Signup);