import React, { Component } from 'react'
import "./button.css"

class Button extends Component {

  render () {
    return (<button type={this.props.type} className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>);
  }
}

export default Button;