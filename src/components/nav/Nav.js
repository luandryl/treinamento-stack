import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authAction'
import { showLogin, hideLogin } from '../../store/actions/navAction'

import Span from '../span/Span'

import "./nav.css"

class Nav extends Component {

  render() {
    let nav = (this.props.authorized) 
    ? <Span onClick={this.props.logout} className="span-pr" text="logout" /> 
    : (this.props.isShowedLogin) 
      ? <Span onClick={this.props.hideLogin} className="span-pr hover" text='signin' />
      : <Span onClick={this.props.showLogin} className="span-pr hover" text='login' />

    
    return (
        <div className="control-wrapper">
          {nav}
        </div>
    );
  }
}

Nav.prototypes = {
  logout: PropTypes.func.isRequired,
  showLogin: PropTypes.func.isRequired,
  hideLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { 
    authorized: state.auth.authorized,
    isShowedLogin: state.nav.isShowedLogin
  }
}

export default connect(mapStateToProps, { logout, showLogin, hideLogin })(Nav);  