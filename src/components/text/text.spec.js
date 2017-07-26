import React from 'react'
import ReactDOM from 'react-dom'
import App from './index'

it('render Text component', () => {
    const div = document.createElement('div')
    ReactDOM.render(React.createElement(App, null, null), div)
});