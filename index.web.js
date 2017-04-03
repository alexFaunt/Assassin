/* eslint-disable no-underscore-dangle */
import React from 'react'
import { render } from 'react-dom'
import 'rxjs/Subject'

import App from './components/App/App'
import configureStore from './state/configure'

const store = configureStore(window.__STATE__)

render(<App theme={window.__THEME__} store={store} />, document.getElementById('app'))
