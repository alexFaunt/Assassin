import React from 'react'
import { AppRegistry } from 'react-native'
import { NativeRouter } from 'react-router-native'
import App from './components/App/App'
import theme from './themes/main'
import configureStore from './state/configure'

const store = configureStore()

const Assassin = () => (
  <NativeRouter>
    <App theme={theme} store={store} />
  </NativeRouter>
)

AppRegistry.registerComponent('Assassin', () => Assassin)
