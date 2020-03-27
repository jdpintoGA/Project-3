import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
require('../styles/style.scss')

import '../styles/style.scss'

import Home from '../components/Home'
import CreateEvent from '../components/CreateEvent'
// import EditEvent from '../components/EditEvent'
// import NavBar from './components/NavBar'



const App = () => (
  <BrowserRouter>
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={CreateEvent} />
      {/* <Route exact path="/" component={EditEvent} /> */}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)