import * as React from 'react'

import { Searchbar } from 'modules/searchbar'
import history from 'common/history'

import './Navbar.scss'

export const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar__title" onClick={() => history.replace('/')}>
      <h1>React-redux Weather App</h1>
    </div>
    <Searchbar display={'horizontal'} />
  </nav>
)
