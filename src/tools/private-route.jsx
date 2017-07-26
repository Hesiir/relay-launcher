import React from 'react'
import Route from 'react-router-dom/Route'
import AsyncComponent from './async-component'

function Authorization(){

}

const PrivateRoute = ({ src, noAuthHandler, exclude, auth, ...rest }) => {
  return <Route {...rest} render={() => {
    if (exclude) return <AsyncComponent {...rest} path={src}/>
    if (auth) {
      return <AsyncComponent {...rest} path={src}/>
    } else {
      if (noAuthHandler) return noAuthHandler()
      return null // go to login
    }
  }}/>
}

export default PrivateRoute
