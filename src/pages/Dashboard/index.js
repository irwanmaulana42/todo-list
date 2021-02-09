import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
const Dashboard = props => {
  return (
    <div>
      <nav className="uk-navbar-container" >
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">LOGO</Link>
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Manage User
                </a>
            </li>
            <li>
              <a href="#">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Manage Label
                </a>
            </li>
            <li>
              <a href="#">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Manage Todos
                </a>
            </li>
            <li style={{
              position: 'absolute',
              right: 0
            }}>
              <a href="#">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Logout
                </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="uk-container uk-container-xlarge uk-margin-top">
        <div className="uk-margin uk-card uk-card-default uk-card-body">
          <h3>TO DO LIST</h3>
          <div className="uk-grid-small">
            <div className="uk-width-1-1">
              <input className="uk-input" type="text" placeholder="Add" />
              <button className="uk-button uk-button-primary">Submit</button>
            </div>
          </div>
          <div className="uk-flex uk-flex-right">
          <button className="uk-label uk-label-danger">Danger</button>
            <button className="uk-label uk-label-danger">Danger</button>
          </div>
          <ul className="uk-list uk-list-striped">
            <li>
              <div className="uk-flex uk-flex-between">
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid" style={{ marginBottom: 0 }}>
                  <label style={{
                    textDecoration: 'line-through'
                  }}><input className="uk-checkbox" type="checkbox" defaultChecked={true} /> List A</label>
                </div>
                <div>
                  <button className="uk-button uk-button-primary uk-button-small">X</button>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-flex uk-flex-between">
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid" style={{ marginBottom: 0 }}>
                  <label style={{
                    textDecoration: 'line-through'
                  }}><input className="uk-checkbox" type="checkbox" defaultChecked={true} /> List B</label>
                </div>
                <div>
                  <span class="uk-label uk-label-danger">Label</span>
                </div>
                <div>
                  <button className="uk-button uk-button-primary uk-button-small">X</button>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-flex uk-flex-between">
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid" style={{ marginBottom: 0 }}>
                  <label style={{
                    textDecoration: 'line-through'
                  }}><input className="uk-checkbox" type="checkbox" defaultChecked={true} /> List C</label>
                </div>
                <div>
                  <button className="uk-button uk-button-primary uk-button-small">X</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
