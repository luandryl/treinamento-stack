import React, { Component } from 'react'
import "./span.css"

class Span extends Component {

  render () {
    return (<span onClick={this.props.onClick} className={this.props.className}>{this.props.text}</span>);
  }
}

export default Span;