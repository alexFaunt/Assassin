/* eslint-env browser */

import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App'

render(<App theme={window.THEME} />, document.getElementById('app'))
