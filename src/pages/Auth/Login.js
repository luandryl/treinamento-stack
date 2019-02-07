import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Label from '../../components/labels/Label'
import InputDef from '../../components/inputs/Input'
import Button from '../../components/button/Button'
import "./auth.css"


class Login extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/todo/')
  }

  render() {
    return (
    <div className="login-container">
      
      <div className="form-wrapper">
        <div className="form-box">
          <Label text="email:" />
          <InputDef className="input-def" type="text"  placeholder="you@provider.com" />
          <Label text="password:" />
          <InputDef className="input-def" type="password"  placeholder="*******" />
          <Button type="submit" onClick={(e) => {this.handleClick(e)}} text="enter" className="btn-pr"  />
        </div>
      </div>

    </div>)
  }
}

export default withRouter(Login)