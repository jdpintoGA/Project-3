import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/UserLogin'
import Register from '../components/UserRegister'

import '../styles/style.scss'

import Home from '../components/Home'
// import NavBar from '../components/NavBar'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
