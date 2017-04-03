import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from '../Home/Home'

export default ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)
