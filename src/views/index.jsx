import React from 'react'
import AppEnvironment from '../environment'
import { QueryRenderer } from 'react-relay'
import Routes from './route'
import { appViewer } from '../querys/app_viewer'

const App = () =>
  <QueryRenderer environment={AppEnvironment}
    query={appViewer}
    variables={{}}
    render={({ error, props }) => {
      if (props) {
        return <Routes {...props}/>
      } else {
        return <div>Loading</div>
      }
    }} />

export default App