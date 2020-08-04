import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { routingConfig } from 'common/routingConfig';
import { history } from 'common/history'
import { Root } from 'common/Root'
import { Layout } from 'layout'
import { Navbar } from 'components/navbar'
import { RouteElement } from '../common/types';


import './App.scss'

const App: React.FC = () => (
  <Root>
    <Layout>
      <Router history={history}>
        <Navbar />
        <Switch>
          {routingConfig.map((page: RouteElement, idx: number) => {
            const { exact, path, component } = page
            return <Route key={idx} exact={exact} path={path} component={component} />
          }
          )}
        </Switch>
      </Router>
    </Layout>
  </Root>
)

export default App
