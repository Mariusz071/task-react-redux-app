import React from 'react'
import Searchbar from 'components/searchbar'

import './Navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar__title">React-redux Weather App</h1>
    <Searchbar />
  </nav>
)

export default Navbar
