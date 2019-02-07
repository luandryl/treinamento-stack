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
      redirect: false
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
          <InputDef className="input-def" type="text" placeholder="Mark Z" />
          <Label text="email:" />
          <InputDef className="input-def" type="text" placeholder="you@provider.com" />
          <Label text="password:" />
          <InputDef className="input-def" type="password" placeholder="*******" />

          <div className="check-input">
            <InputDef className="input-ck" type="text"  placeholder="3+2=?" />
          </div>
        
          <Button type="submit" onClick={(e) => {this.handleClick(e)}} text="create acount" className="btn-pr" />
        </div>
      </div>

    </div>)
  }
}

export default withRouter(Signup);