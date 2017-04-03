import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../../components/App/App'
import mainTheme from '../../themes/main'
import configureStore from '../../state/configure'

const store = configureStore()
const theme = JSON.stringify(mainTheme)
const state = JSON.stringify(store.getState())

export default (req) => {
  const context = {}
  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App theme={mainTheme} store={store} />
    </StaticRouter>
  )

  return {
    app,
    theme,
    state,
    context
  }
}
