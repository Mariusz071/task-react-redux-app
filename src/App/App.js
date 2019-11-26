import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import history from 'common/history'

import Layout from 'layout'
import Navbar from 'components/navbar'
import Search from 'pages/search'
import Forecast from 'pages/forecast'
import DetailedForecast from 'pages/detailedForecast'

import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/weather" exact component={Forecast} />
            <Route path="/weather/:id" exact component={DetailedForecast} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  )
}

export default App
