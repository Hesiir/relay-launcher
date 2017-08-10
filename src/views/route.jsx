import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Switch from 'react-router-dom/Switch'
import PrivateRoute from '../tools/private-route'

const ReactRouter = ({...rest}) => {
  return (<BrowserRouter>
  <Switch>
    <PrivateRoute {...rest} exclude path='/page2' loader={() => import('./page2')}/>
    <PrivateRoute {...rest} exclude path='/' loader={() => import('./page')}/>
  </Switch>
</BrowserRouter>)
}

export default ReactRouter
