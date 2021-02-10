import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Register extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if(isLoggedIn){
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="uk-container">
          <div className="uk-flex uk-flex-center uk-margin-medium-top">
            <div className="uk-card uk-card-default uk-card-small uk-card-body uk-width-1-2@m">
              <h3 className="uk-card-title">Register</h3>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="username">Username</label>
                <div className="uk-form-controls">
                  <input className="uk-input" id="username" type="text" placeholder="Username" />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Password</label>
                <div className="uk-form-controls">
                  <input className="uk-input" id="password" type="password" placeholder="Password" />
                </div>
              </div>
              <span>Already have an account?
            <Link to="/login">Sign In</Link>
              </span>
              <div className="uk-column-1-2">
                <button className="uk-button uk-button-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.authReducer;
  const { message } = state.messageReducer;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Register);
