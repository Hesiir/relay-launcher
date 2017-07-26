import React, { Component } from 'react'
import NavLink from 'react-router-dom/NavLink'
import logo from '../assets/images/logo.svg'
import Text from '../components/text'
import '../assets/styles/app.css'

export default class Page extends Component {
  render() {
    let { foo } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NavLink to='/page2'>route to page 2</NavLink>
        <p>fetch foo from server by GraphQL: {foo}</p>
        <p>Component Text: <Text>something...</Text></p>
        <p className="App-intro">
          To get started, edit <code>src/views</code> and save to reload.
        </p>
      </div>
    )
  }
}
