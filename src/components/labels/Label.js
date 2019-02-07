import React, { Component } from 'react'
import "./label.css"

class Label extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<label className="pr-label">{this.props.text}</label>);
  }
}

export default Label;