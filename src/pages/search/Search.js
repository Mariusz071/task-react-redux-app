import React, { Component } from 'react'
import { connect } from 'react-redux'
import get from 'lodash.get'

import Searchbar from 'components/searchbar'

import './Search.scss'

class Search extends Component {
  render() {
    const { error } = this.props
    return (
      <div className="search-page">
        <h2 className="search-page__header">Enter a City and State</h2>
        <Searchbar display="vertical" error={error} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: get(state, 'weather.error'),
})

export default connect(mapStateToProps, null)(Search)
