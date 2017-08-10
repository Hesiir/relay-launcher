import React from 'react'
import Loadable from 'react-loadable'
import Exception from './exception'

const AsyncComponent = ({ loader, ...rest }) => {
  let CallBackModule = Loadable({
    loader: loader,
    loading: Exception,
  })
  return <CallBackModule {...rest}/>
}

export default AsyncComponent
