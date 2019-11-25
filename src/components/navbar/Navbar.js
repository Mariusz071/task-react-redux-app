import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'

import Searchbar from 'components/searchbar'

import './Navbar.scss'

class Navbar extends Component {
  render() {
    const { getWeather } = this.props
    return (
      <nav className="navbar">
        <h1 className="navbar__title">React-redux Weather App</h1>
        <Searchbar getValue={getWeather} />
      </nav>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}

const mapStateToProps = state => ({
  weather: state.weather,
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
