import React, { Component } from 'react'
import "./input.css"

class Input extends Component {

  render () {
    return (<input value={this.props.value} onChange={this.props.onChange} className={this.props.className} type={this.props.type} placeholder={this.props.placeholder} />);
  }
}

export default Input;