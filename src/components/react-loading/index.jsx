import React from 'react'
import classNames from 'classnames/bind'
import style from './style.css'

const S = classNames.bind(style)
const ReactLoading = () => (<div className={S('react-loading')}>
  <div className="react-cloud">
    <div className="item"></div>
    <div className="item"></div>
    <div className="item"></div>
    <div className="point"></div>
  </div>
</div>)

export default ReactLoading