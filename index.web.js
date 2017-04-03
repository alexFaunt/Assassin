/* eslint-disable no-underscore-dangle */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'rxjs/Subject'

import App from './components/App/App'
import configureStore from './state/configure'

const store = configureStore(window.__STATE__)

render(
  <BrowserRouter><App theme={window.__THEME__} store={store} /></BrowserRouter>,
  document.getElementById('app')
)
