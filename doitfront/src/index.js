import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import NotFound from './components/NotFound'
import Connexion from './components/Connexion'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/home' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
