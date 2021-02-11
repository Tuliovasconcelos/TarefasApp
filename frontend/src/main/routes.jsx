import React from 'react'

import Todo from '../todo/todo'
import About from '../about/about'

import { Router, Route, Redirect, hashHistory } from 'react-router'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)