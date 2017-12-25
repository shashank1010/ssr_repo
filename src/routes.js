import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './scenes/about'
import Home from './scenes/home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
  </Route>
)