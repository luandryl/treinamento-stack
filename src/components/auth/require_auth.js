import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authorized) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authorized) {
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authorized: state.auth.authorized };
  }

  return connect(mapStateToProps)(Authentication);
}