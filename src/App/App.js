import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from 'common/history'
import Root from 'Root'
import Layout from 'layout'
import Navbar from 'components/navbar'
import Search from 'pages/search'
import Forecast from 'pages/forecast'
import DetailedForecast from 'pages/detailedForecast'

import './App.scss'

const App = () => (
  <Root>
    <Layout>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/:city/" exact component={Forecast} />
          <Route path="/:city/:id" exact component={DetailedForecast} />
        </Switch>
      </Router>
    </Layout>
  </Root>
)

export default App
