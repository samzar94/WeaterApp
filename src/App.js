import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import Grid from '@material-ui/core/Grid'

const App = () => {
  return (
    <Grid container justify="center" direction="row">
      <Grid item sm={10} xs={10}>
        <h1>this is app</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>
            <Route path="/city">
              <CityPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  )
}

export default App
