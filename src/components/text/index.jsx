import React from 'react'
import classNames from 'classnames/bind'
import style from  './style.css'

const S = classNames.bind(style)
const Text = ({children}) => (<span className={S('text-component')}>
  {children}
</span>)

export default Text