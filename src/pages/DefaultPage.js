import React, { Component } from 'react'
import "./default.css"

class DefaultPage extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="page-container">
        <div className="page-box">
          <div className="page-content">
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