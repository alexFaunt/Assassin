import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../components/App/App'
import mainTheme from '../../themes/main'
import configureStore from '../../state/configure'

const store = configureStore()
const theme = JSON.stringify(mainTheme)
const state = JSON.stringify(store.getState())

export default (/* req */) => ({
  app: renderToString(<App theme={mainTheme} store={store} />),
  theme,
  state
})
