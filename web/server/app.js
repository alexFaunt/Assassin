import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../components/App/App'
import theme from '../../themes/main'

export default () => ({
  app: renderToString(<App theme={theme} />),
  theme: JSON.stringify(theme)
})
