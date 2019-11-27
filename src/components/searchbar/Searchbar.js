import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import get from 'lodash.get'
import cn from 'classnames'

import './Searchbar.scss'

class Searchbar extends Component {
  state = {
    value: '',
  }

  inputChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    const { value } = this.state
    const { getWeather } = this.props
    getWeather(value)
    this.setState({ value: '' })
  }

  render() {
    const { display, error } = this.props
    const { value } = this.state
    return (
      <div
        className={cn('searchbar', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
      >
        <div className="searchbar__input">
          <input
            placeholder="i.e London, United Kingdom"
            className="searchbar__field"
            value={value}
            onChange={this.inputChange}
          ></input>
          {error && <div className="error">{error}</div>}
        </div>
        <button className="btn success" onClick={this.onSubmit}>
          Get Weather
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}

const mapStateToProps = state => ({
  error: get(state, 'weather.error.message'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
