import React, { Component } from 'react'
// import debounce from 'lodash.debounce'

import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import Searchbar from 'components/searchbar'

import './Search.scss'

class Search extends Component {
  state = {
    city: '',
  }

  // getCity = city => {
  //   const { getWeather } = this.props
  //   this.setState({ city }, () => getWeather(city))
  // }

  // debouncedGetCity = debounce(this.getCity, 300)

  render() {
    const { getWeather } = this.props
    return (
      <div className="search-page">
        <h2 className="search-page__header">Enter a City and State</h2>
        <Searchbar display="vertical" getValue={getWeather} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
