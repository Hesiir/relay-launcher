import React, { Component } from 'react'
import NavLink from 'react-router-dom/NavLink'
import logo from '../assets/images/logo.svg'
import '../assets/styles/app.css'

export default class Page extends Component {
  componentDidMount(){
    window.removePreMountedLoading && window.removePreMountedLoading()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NavLink to='/'>back to home</NavLink>
        <p className="App-intro">
          this is page2 and it's async loaded
        </p>
      </div>
    )
  }
}
