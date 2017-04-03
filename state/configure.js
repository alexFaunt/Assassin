/* eslint-disable no-underscore-dangle */

import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'

// const composeEnhancers = process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   : compose
// composeEnhancers(
//   applyMiddleware()
// )

export default (state = {}) => createStore(
  combineReducers(reducers),
  state,
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
