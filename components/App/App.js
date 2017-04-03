import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import Routes from '../Routes/Routes'

export default ({ store, theme }) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </StoreProvider>
)
