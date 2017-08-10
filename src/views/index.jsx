import React from 'react'
import AppEnvironment from '../environment'
import { QueryRenderer } from 'react-relay'
import Routes from './route'
import { appViewer } from '../querys/app_viewer'
import ApiCallbackError from './apiCallbackError'

const App = () =>
  <QueryRenderer environment={AppEnvironment}
    query={appViewer}
    variables={{}}
    render={({ error, props }) => {
      if (props) {
        return <Routes {...props}/>
      } else if(error) {
        return <ApiCallbackError/>
      } else {
        return null
      }
    }} />

export default App