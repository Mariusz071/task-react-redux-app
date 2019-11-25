import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'

import Layout from 'layout'
import Navbar from 'components/navbar'
import Search from 'pages/search'
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Search} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  )
}

export default App
