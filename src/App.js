import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>this is app</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            Welcome
            <div>
              <Link to="/main">ir a main</Link>
            </div>
          </Route>
          <Route path="/main">Main</Route>
          <Route path="/city">
            City
            <div>
              <Link to="/main">volver a main</Link>
            </div>
          </Route>
          <Route>
            Not Found
            <div>
              <Link to="/main">volver a main para nevegar</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
