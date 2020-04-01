import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../styles/style.scss'
import '../styles/button.scss'
import 'bulma'

import Login from '../components/UserLogin'
import Register from '../components/UserRegister'
import Home from '../components/Home'
import CreateEvent from '../components/CreateEvent'
import Events from '../components/Events'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={CreateEvent} />
      <Route exact path="/hub" component={Events} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
