import React from 'react'

import Searchbar from 'components/searchbar'
import history from 'common/history'

import './Navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__title" onClick={() => history.replace('/')}>
      <h1>React-redux Weather App</h1>
    </div>
    <Searchbar />
  </nav>
)

export default Navbar
