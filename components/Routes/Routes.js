import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'

export const routes = [
  { path: '/', exact: true, component: Home }
]

export default () => (
  <Switch>
    { routes.map((route) => <Route key={route.path} {...route} />) }
  </Switch>
)
