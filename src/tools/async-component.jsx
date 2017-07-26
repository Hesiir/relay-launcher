import React from 'react'
import Loadable from 'react-loadable'
import Exception from './exception'

const AsyncComponent = ({ path, ...rest }) => {
  let CallBackModule = Loadable({
    loader: () => {
      let mod = import(`../views/${path}`)
      return mod
    },
    loading: Exception,
  })
  return <CallBackModule {...rest}/>
}

export default AsyncComponent
