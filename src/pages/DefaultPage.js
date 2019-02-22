import React, { Component } from 'react'
import Nav from '../components/nav/Nav'
import "./default.css"

class DefaultPage extends Component {
  
  render () {
    return (
      <div className="page-container">
        <div className="page-box">
          <div className="page-content">
            <Nav />
            {this.props.children}
          </div>
          <div className="page-image">
            <label> UNECTodo </label>
          </div>
      </div>
    </div>
    );
  }
}

export default DefaultPage;